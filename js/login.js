// login.js 파일 최상단에 위치시키세요
// cookie-utils.js (또는 session.js 맨 위)

const MAX_FAIL = 3;
function updateLoginStatus() {
    const statusEl = document.getElementById("login_status");
    let cnt = parseInt(getCookie("login_failed"), 10) || 0;
  
    if (cnt >= MAX_FAIL) {
      statusEl.innerText = `로그인 ${cnt}회 실패: 잠시 로그인 제한 상태입니다.`;
    } else if (cnt > 0) {
      statusEl.innerText = `로그인 실패: ${cnt}회 (3회 이상 제한)`;
    } else {
      statusEl.innerText = "";
    }
  }

  function reset_login_failures() {
    deleteCookie("login_failed");  // 실패 기록 삭제
    updateLoginStatus();           // 화면 상태 갱신
  }

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days*24*60*60*1000);
    document.cookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value) +
      "; expires=" + date.toUTCString() +
      "; path=/";
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, val] = c.split("=");
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

  function login_failed() {
    let cnt = parseInt(getCookie("login_failed"), 10);
    if (isNaN(cnt)) cnt = 0;
    cnt += 1;
    setCookie("login_failed", cnt, 1);
    console.log(`로그인 실패 횟수: ${cnt}`);
    // 필요하면 3회 이상일 때 버튼 비활성화 등 추가 처리
  }

  function login_count() {
    let cnt = parseInt(getCookie("login_cnt"), 10);
    if (isNaN(cnt)) cnt = 0;
    cnt += 1;
    setCookie("login_cnt", cnt, 365);
  }
 

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if(get_id) {
    emailInput.value = get_id;
    idsave_check.checked = true;
    }
    session_check(); // 세션 유무 검사
    }

const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;
    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);
    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
        // XSS 공격 가능성 발견 시 에러 처리
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
        return false;
    }
    // Sanitized된 값 반환
    return sanitizedInput;
    };


const check_input = () => {
    // id가 "login_form"인 폼 선택 (폼 태그에 id가 있어야 함)
    const loginForm = document.getElementById('login_form');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    // 전역 변수 추가, 맨 위 위치
    const idsave_check = document.getElementById('idSaveCheck');
    
    
    alert('아이디, 패스워드를 체크합니다');
        
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const sanitizedPassword = check_xss(passwordValue);
    const sanitizedEmail    = check_xss(emailValue);


    if (emailValue === '') {
        alert('이메일을 입력하세요.');
        login_failed();
        updateLoginStatus();
        return false;
    }
    if (passwordValue === '') {
        alert('비밀번호를 입력하세요.');
        login_failed();
        updateLoginStatus();
        return false;
    }

    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        login_failed();
        updateLoginStatus();
        return false;
        }
    if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        login_failed();
        updateLoginStatus();
        return false;
    }
        const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\- =\[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        login_failed();
        updateLoginStatus();
        return false;
    }
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }

    if (!sanitizedEmail) {
        // Sanitize된 비밀번호 사용
        login_failed();
        updateLoginStatus();
        return false;
        }

    if (!sanitizedPassword) {
        // Sanitize된 비밀번호 사용
        login_failed();
        updateLoginStatus();
        return false;
    }

    if(idsave_check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1); // 1일 저장
        alert("쿠키 값 :" + emailValue);
        }
    else{ // 아이디 체크 x
    setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
    }
    
    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    login_count();
    session_set(); // 세션 생성
    reset_login_failures();
    loginForm.submit();
};





document.getElementById("login_btn").addEventListener('click', check_input);
  