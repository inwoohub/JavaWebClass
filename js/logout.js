// // logout.js


// function removeSession() {
//     if (sessionStorage) {
//       sessionStorage.removeItem("Session_Storage_test");
//     }
//   }
  
//   /**
//    * 쿠키 삭제 (만료일을 과거로 설정)
//    * @param {string} name — 삭제할 쿠키 이름
//    */
//   function removeCookie(name) {
//     document.cookie = 
//       encodeURIComponent(name) +
//       "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; Secure";
//   }
  
//   function logout() {
//     removeSession();
//     removeCookie("id");
//     alert("로그아웃 되었습니다.");
//     // 로그인 페이지 경로에 맞게 수정하세요
//     window.location.href = "/login.html";
//   }
  
//   // 페이지 로드 후 버튼에 이벤트 바인딩
//   document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.getElementById("logout_btn");
//     if (btn) {
//       btn.addEventListener("click", logout);
//     }
//   });
  