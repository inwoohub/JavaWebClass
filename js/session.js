import { encrypt_text, decrypt_text } from './crypto.js';

// cookie-utils.js (또는 session.js 맨 위)
export function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days*24*60*60*1000);
    document.cookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value) +
      "; expires=" + date.toUTCString() +
      "; path=/";
  }
  
export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (decodeURIComponent(key) === name) {
      return decodeURIComponent(val);
    }
  }
  return null;
}
  
export  function deleteCookie(name) {
  document.cookie =
  encodeURIComponent(name) +
  "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// function session_set() { //세션 저장
//     let session_id = document.querySelector("#typeEmailX");
//     if (sessionStorage) {
//         sessionStorage.setItem("Session_Storage_test", session_id.value);
//     } else {
//         alert("로컬 스토리지 지원 x");
//     }
// }

// export function session_set() {
//   const idElem   = document.querySelector('#typeEmailX');
//   const passElem = document.querySelector('#typePasswordX');
//   if (!sessionStorage) {
//     return alert('로컬 스토리지 지원 안 됨');
//   }
//   const en = encrypt_text(passElem.value);
//   sessionStorage.setItem('Session_Storage_id',   idElem.value);
//   sessionStorage.setItem('Session_Storage_pass', en);
// }

export function session_set(){ //세션 저장(객체)
  let id = document.querySelector("#typeEmailX");
  let password = document.querySelector("#typePasswordX");
  let random = new Date(); // 랜덤 타임스탬프
  const obj = { // 객체 선언
  id : id.value,
  otp : random
  }
  // 다음 페이지 계속 작성하기
  if (sessionStorage) {
    const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
    let en_text = encrypt_text(objString); // 암호화
    sessionStorage.setItem("Session_Storage_id", id.value);
    sessionStorage.setItem("Session_Storage_object", objString);
    sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
      alert("세션 스토리지 지원 x");
    }
  }

export function session_set2(signUpObj) {
  // 1) 세션 스토리지 지원 여부
  if (!sessionStorage) {
    alert("세션 스토리지 지원 x");
    return;
  }

  // 2) 객체 그대로 JSON 문자열로 변환
  const objString = JSON.stringify(signUpObj);

  // 3) 암호화
  const en_text = encrypt_text(objString);

  // 4) 세션 스토리지에 저장
  sessionStorage.setItem("Session_Storage_user",   signUpObj._email);  // 이메일만 따로 저장하고 싶다면
  sessionStorage.setItem("Session_Storage_object", objString);
  sessionStorage.setItem("Session_Storage_pass",   en_text);
  console.log("====== 세션 스토리지 전체 목록 ======");
  for (let i = 0; i < sessionStorage.length; i++) {
    const key   = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(key, ":", value);
  }
}
  

// function session_get() { //세션 읽기
//     if (sessionStorage) {
//         return sessionStorage.getItem("Session_Storage_test");
//     } else {
//         alert("세션 스토리지 지원 x");
//     }
// }

export function session_get() { //세션 읽기
  if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_pass");
  } else {
    alert("세션 스토리지 지원 x");  
  }
}

// function session_check() { //세션 검사
//     if (sessionStorage.getItem("Session_Storage_test")) {
//         alert("이미 로그인 되었습니다.");
//         location.href='../index.html'; // 로그인된 페이지로 이동
//     }
// }

export function session_check() { //세션 검사
  if (sessionStorage.getItem("Session_Storage_id")) {
    alert("이미 로그인 되었습니다.");
    location.href='../login/index_login.html'; // 로그인된 페이지로 이동
  }
}
  

export function session_del() {//세션 삭제
    if (sessionStorage) {
      sessionStorage.removeItem("Session_Storage_id");
      alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
      alert("세션 스토리지 지원 x");
    }
}


export function logout(event) {
  if (event) event.preventDefault();

  // 1) 세션 스토리지 삭제
  session_del();

  // 2) login_cnt 감소
  let cnt = parseInt(getCookie("login_cnt"), 10);
  if (isNaN(cnt)) cnt = 0;
  cnt = Math.max(cnt - 1, 0);
  setCookie("login_cnt", cnt, 365);

  // 3) id 쿠키 삭제
  deleteCookie("id");

  // 4) 리다이렉트
  window.location.href = "/JavaWebClass/";
}
  


export function requireLogin() {
  const loginId = sessionStorage.getItem("Session_Storage_id");
  if (!loginId) {
    alert("로그인이 필요합니다!");
    window.location.href = "./login.html";
  }
}