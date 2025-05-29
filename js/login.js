// login.js

// ─── 모듈 임포트 ───────────────────────────
import { session_check, logout } from './session.js';
import { encrypt_text, decrypt_text } from './crypto.js';       // 기존 CryptoJS-CBC 방식
import { encryptSession, decryptSession } from './crypto2.js';   // Web Crypto API AES-GCM 방식
import { JWT_SECRET, generateJWT } from './jwt_token.js';

// ─── 상수 정의 ────────────────────────────
const MAX_FAIL = 3;

// ─── 쿠키 헬퍼 ─────────────────────────────
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value) +
    "; expires=" + date.toUTCString() +
    "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, val] = c.split('=');
    if (decodeURIComponent(key) === name) {
      return decodeURIComponent(val);
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie =
    encodeURIComponent(name) +
    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// ─── 로그인 실패/횟수 헬퍼 ──────────────────
function updateLoginStatus() {
  const statusEl = document.getElementById('login_status');
  let cnt = parseInt(getCookie('login_failed'), 10) || 0;

  if (cnt >= MAX_FAIL) {
    statusEl.innerText = `로그인 ${cnt}회 실패: 잠시 로그인 제한 상태입니다.`;
  } else if (cnt > 0) {
    statusEl.innerText = `로그인 실패: ${cnt}회 (3회 이상 제한)`;
  } else {
    statusEl.innerText = '';
  }
}

function login_failed() {
  let cnt = parseInt(getCookie('login_failed'), 10);
  if (isNaN(cnt)) cnt = 0;
  cnt += 1;
  setCookie('login_failed', cnt, 1);
  updateLoginStatus();
}

function reset_login_failures() {
  deleteCookie('login_failed');
  updateLoginStatus();
}

function login_count() {
  let cnt = parseInt(getCookie('login_cnt'), 10);
  if (isNaN(cnt)) cnt = 0;
  cnt += 1;
  setCookie('login_cnt', cnt, 365);
}

// ─── XSS 체크 헬퍼 ─────────────────────────
function check_xss(input) {
  const DOMPurify = window.DOMPurify;
  const sanitized = DOMPurify.sanitize(input);
  if (sanitized !== input) {
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
  }
  return sanitized;
}

// ─── 폼 초기화 ────────────────────────────
function init() {
  const emailInput   = document.getElementById('typeEmailX');
  const idsave_check = document.getElementById('idSaveCheck');
  const savedId      = getCookie('id');
  if (savedId) {
    emailInput.value     = savedId;
    idsave_check.checked = true;
  }
}

// ─── 로그인 검증 & 세션 저장 ─────────────────
async function check_input(event) {
  event.preventDefault();

  const loginForm     = document.getElementById('login_form');
  const emailInput    = document.getElementById('typeEmailX');
  const passwordInput = document.getElementById('typePasswordX');
  const idsave_check  = document.getElementById('idSaveCheck');

  const emailValue    = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // 입력 검증
  if (!emailValue || !passwordValue
      || check_xss(emailValue) === false
      || check_xss(passwordValue) === false
      || emailValue.length < 5 || emailValue.length > 10
      || passwordValue.length < 12 || passwordValue.length > 15
      || /(.{3,})\1/.test(emailValue + passwordValue)
      || /(\d{2,}).*\1/.test(emailValue + passwordValue)
      || !/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue)
      || !/[A-Z]/.test(passwordValue)
      || !/[a-z]/.test(passwordValue)
  ) {
    alert('입력값이 유효하지 않습니다.');
    login_failed();
    return;
  }

  // 로그인 카운트
  login_count();

  // 세션용 JSON 생성
  const sessionObj = {
    id: emailValue,
    otp: new Date().toISOString()
  };
  const sessionStr = JSON.stringify(sessionObj);

  // ── 기존 AES256-CBC 방식 암호화 (JSON) ──
  const oldEncrypted = encrypt_text(sessionStr);
  sessionStorage.setItem('Session_Storage_pass', oldEncrypted);

  // ── Web Crypto AES-GCM 방식 암호화 (JSON) ──
  const newEncrypted = await encryptSession(sessionStr);
  sessionStorage.setItem('Session_Storage_pass2', newEncrypted);

  sessionStorage.setItem('Session_Storage_id', emailValue);
  sessionStorage.setItem('Session_Storage_object', sessionStr);

  // JWT 생성 및 저장
  const payload  = { id: emailValue, exp: Math.floor(Date.now()/1000) + 3600 };
  const jwtToken = generateJWT(payload);
  localStorage.setItem('jwt_token', jwtToken);



  // 아이디 쿠키
  if (idsave_check.checked) {
    setCookie('id', emailValue, 1);
  } else {
    deleteCookie('id');
  }

  // 실패 기록 초기화
  reset_login_failures();

  // 폼 제출
  loginForm.submit();
}

// ─── 로그인 후 복호화 확인 ─────────────────
async function init_logined() {
  if (!sessionStorage) { alert('세션 스토리지 미지원'); return; }

  // 1) 기존 복호화 (JSON)
  const oldCipher = sessionStorage.getItem('Session_Storage_pass');
  if (oldCipher) {
    try {
      const oldPlain = decrypt_text(oldCipher);
      console.log('복호화 결과 (Session_Storage_pass):', oldPlain);
    } catch (e) { console.error('복호화 실패:', e); }
  }

  // 2) 신규 복호화 (JSON)
  const newCipher = sessionStorage.getItem('Session_Storage_pass2');
  if (newCipher) {
    try {
      const newPlain = await decryptSession(newCipher);
      console.log('복호화 결과 (Session_Storage_pass2):', newPlain);
    } catch (e) { console.error('복호화 실패:', e); }
  }
}

// ─── 이벤트 리스너 등록 ─────────────────────
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('DOMContentLoaded', init_logined);
document.getElementById('login_btn').addEventListener('click', check_input);
