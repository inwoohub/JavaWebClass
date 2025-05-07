// cookie-utils.js (또는 session.js 맨 위)
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

function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX");
    if (sessionStorage) {
        sessionStorage.setItem("Session_Storage_test", session_id.value);
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href='../index.html'; // 로그인된 페이지로 이동
    }
}

function session_del() {//세션 삭제
    if (sessionStorage) {
    sessionStorage.removeItem("Session_Storage_test");
    alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
    alert("세션 스토리지 지원 x");
    }
}


function logout(event) {
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
    window.location.href = "/index.html";
  }
  