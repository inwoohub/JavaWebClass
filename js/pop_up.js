
function pop_up() {
  var popupWindow = window.open('../popup/popup.html', '팝업창', 'width=600,height=400');
}


// 함수 이름을 clock()으로 사용하고, 자기 자신을 호출하도록 수정
function clock(){
  let currentDate = new Date(); // 현재 시스템 날짜 객체 생성
  let divClock = document.getElementById('divClock');
  let msg = "현재 시간 : ";
  if (currentDate.getHours() > 12) { // 12시 보다 크면 오후
    msg += "오후 " + (currentDate.getHours() - 12) + "시 ";
  } else {
    msg += "오전 " + currentDate.getHours() + "시 ";
  }
  msg += currentDate.getMinutes() + "분 " + currentDate.getSeconds() + "초";
  divClock.innerText = msg;

  // 분이 59분에 가까우면 빨간색
  if (currentDate.getMinutes() > 58) {
    divClock.style.color = "red";
  } else {
    divClock.style.color = "";
  }

  setTimeout(clock, 1000); // 1초마다 자기 자신 재호출
}



  