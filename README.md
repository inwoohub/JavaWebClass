# 자바 웹 프로그래밍
## 2주차 <br>
⤷ 비쥬얼 스튜디오 설치 및 github 연동 및 커밋해보기, index.html 만들고 기초 코드 작성해보기<br>
자바스크립트를 배워본적이 없어서 기대된다. 잘 배워보고싶다.<br><br>

## 3주차 <br>
⤷ 메타데이터 , 하이퍼링크 사용하기 메타데이터 - head 내부, 하이퍼링크 - body 내부, 테이블 만들기.<br>
찾아보니 메타데이터는 주로 백엔드에서 사용하는 것 같고, 하이퍼링크는 주소를 이동하기 위해서 사용하는 것 같다. <br>
테이블 표도 쉽게 만들수있는걸 배웠다. 실제로 https://www.kleague.com/record/team.do k리그 순위표인데 <br>
여기서도 역시 수업 때 배운 테이블로 구성되어있던걸 확인했다. 그래서 혼자 개발하고있는 사이트에서 스크래핑 기술을 통해 테이블 안에있는
데이터들을 가져올 때 더 수월했다.<br><br>

## 4주차 <br>
⤷ defer? js파일 실행 잘 시켜줌 + 검색창 + 부트스트랩에서 제공된 class는 style조심하게 하자.. backcolor넣었다가 안눌려서 고생했다<br>
네비게이션 바 만들기 , js 부트스트랩 scripts로 태그로 cdn링크에 연동시켜서 사용하기 <br>
defer를 적지 않고 계속 실행했다가. 스크립트파일이 로딩되기전에 화면에 들어가서 계속 오류를 맛봤다.<br>
gpt랑 오랜시간 싸우고 찾은 결과 수업자료에 defer 를 유심하게 안 보고 지나간 내 실수다...<br><br>

## 5주차 <br>
⤷ 구글 및 네이버 검색 연동 https에다가 ='값' 넣어서 함 + 팝업 했음 (modal이랑 비슷함 해당 사이트에서 이벤트or광고에서 팝업 많이 본거같다)<br>
js파일 + 함수 / index 파일에서 <script></script> 추가 하기 / 그리고 밑에서 함수 불러서 호출해서 사용하기<br>
진행하고있는 프로젝트에서 modal을 만들어서 써보고 수업 때 popup을 만들어서 써본결과 사용용도는 modal은 광고를 띄우기 보단, 기능 적으로 쓰는게 더 효과적인 것 같다. <br>
왜냐하면 modal은 새로운창이 아닌, 기존 창에서 업로드 되는 화면 이기 때문에, 로그인 버튼 -> 로그인 모달 이런 식으로 쓰는게 좋아보였다<br><br>

## 6주차<br>
⤷ js파일로 데이터 콘솔 출력, 팝업 시간 출력, 부트스트랩 제공 폰트 변경, 이미지 호버 ( 그림 다른거 바꾸기 js로함) <br>
시험문제 Tip . 검색에서 문자열 필터링 하기 문자열=0 , 비속어 3개정도 배열 및 for문 사용해서 필터링 <br>
로그인 / 로그아웃 / 팝업 시간 지나면 종료<br>
팝업창에 해당 시간이 지나면 자동으로 닫기 기능 추가해보았다. pop_close.js를 통해서 했고, show_time()함수로 1초씩 감소시켰다. <br>
응용하면 광고 30초간 띄우고 자동 닫기 등 다른 기능을 만들어 볼 수 있을 것 같다.<br><br>

## 7,8주차 <br>
⤷ 공부 및 시험<br><br>

## 9주차<br>
⤷ 아이디 & 비밀번호 조건주기 , XSS (악성스크립트) 방지 외부라이브러리씀, 간단한 쿠키 만듦 (+보안 Secure)<br>
백엔드에서 해야될줄 알았던 아이디 및 비밀번호 입력할 때 조건주는걸 프론트에서부터 막아버리는걸 해보았다.<br>
그래서 응용하면 회원가입 할 때 특정 이메일 주소를 사용해야하거나, 비밀번호 조건을 프론트에서 줘버릴 수 있다고 생각했다.<br>
그리고 XSS 방지 이런건 사실 보안 쪽이라 어렵다. 요즘은 개발자가 직접 프론트나, 백엔드 단에서 처리해줘야할지도 의문이다. <br>
그다음 간단한 쿠키를 만들어 보았는데, 사실 쿠키 , 세션 이쪽도 이론적으로 쉽지않다. 쿠키는 보통 클라이언트에 저장되는 형태이다.<br>
보통 특정 정보를 일정기간 동안 저장하는데 사용한다 ex. 로그인유지 , 팝업 1일동안 안띄우기 등, 그리고 알게모르게 우리가 엄청많이 쓰고있기도 한다.<br><br>

## 10주차<br>
⤷ 로그인 쿠키&세션 만들기, 세션을 통해 로그인 유지 및 로그아웃 하기, 로그인제한, 세션 지우기, 로그인&로그아웃 카운팅<br>
이번엔 쿠키를 저장해보고, 세션도 처리해봤다. 내가 알고있던 세션은 클라이언트->서버 로 세션을 요청하고 제공받아서 세션 키값을
통해서 세션을 유지시키는 방법 즉, 신분증을 제시하고 그에 맞는 입장권을 클라이언트가 들고다녀서 매 인증이 필요할 때 서버로 입장권을 제출하여서 인증 받는 구조라고 알고있다.<br>
하지만, 이 수업은 자바 웹 프로그래밍 (프론트) 만 배우는 수업이라서 그런지 서버가 없다.<br>
그래서 프론트단에서 세션까지 알아서 만들고 처리를 해야했다. sessionStorage를 통해서 세션을 get, set을 통해 올리고 갖다 쓰고 하는 방식이였다.<br><br>

## 11주차<br>
⤷ 로그인시 패스워드 암호화로 세션에 저장-> 복호화해서 콘솔로 찍어내기 , 토큰 -> 로컬스트리지의 저장 (단방향)<br>
프론트에서 crypto-js 외부 라이브러리를 통해서 암호화 및 복호화를 했다. 사용한 알고리즘은 AES 암호 알고리즘이다. 즉, 대칭키 암호 알고리즘이다.<br>
지난 시간에 쿠키&세션으로 로그인 관련해서 배웠다면 이번에는 JWT토큰으로 배웠다. localStrorage를 통해서 get, set을 통해 올리고 가져다 쓰는 방식이였다.<br><br>

## 12주차<br>
⤷ js 모듈화 export로 내보내고 import로 함수 가져와서 사용 , 회원가입 페이지<br>
11주차 까지는 모든 자바스크립트 파일을 하나씩 불러와서 head에 넣었다면 오늘 배운 건 모듈화이다.<br>
모듈화를 통하면 코드를 import 방식으로 불러와서 쓰기만하면되서 모듈화가 잘 되어있다면, 코드가 훨씬 보기 간편하고, 코드양도 줄어들 것이다.<br>
방법은 다른 자바스크립트에서 export해서 내보낸걸 하나의 자바스크립트에서 import해서 합치는 방법이다. 이렇게 하고 html에서 하나의 자바스크립트만 추가해주면 된다.<br>
다른 html를 만들어도 하나의 자바스크립트만 추가해주면 되서 매우매우매우 개발하는데에 있어 편리해 중요한 개념이다.<br><br>

## 13주차<br>
⤷ 프로필페이지(부트스트랩) , 카카오맵 api활용해서 지도 표기 <br>
저번에도 부트스트랩을 통해서 여러 html을 복사 후 붙여넣기만 하면되서 매우 편하게 잘 써먹었다.<br>
요즘 졸업작품을 개발하는데에 있어 지적받았던 것이 기능은 다 괜찮은데 ui가 너무 별로라는 지적을 받았던게 생각나서, 수업 때 배운 부트스트랩을 이용해볼까도 싶다.<br>
그리고 카카오맵 api연동 시키는데 이전, 다른 프로젝트를 진행하면서 카카오 로그인 api를 써먹어본적이있다. 그때 4시간동안 로그인관련해서 고생했었는데<br>
이번 카카오맵 api를 써먹는데 단 1시간도 안 걸렸던 것 같다. 혼자 찾아보면서 해보는것과 누군가에게 배우면서 사용한다는게 이렇게 차이가 큰줄 몰랐다.<br>
심지어 카카오맵 api를 불러오고 지도에서 다른 기능등을 추가하는데도 어려움이 없었다. 나중에 지도가 필요한 프로젝트가 있다면, 쉽게 사용가능 할 것 같다.<br><br>

## 응용 문제<br>

## 2주차 주제선정, 데이터 수정
⤷ LOL 웹사이트를 한번 만들어보라는 교수님 말씀에 그나마 프론트에서 써본적 있는 React 툴을 활용해서 만들어 보았다. <br>
Main.js 를 통해서 메인페이지를 만들었고 Components 폴더를 통해서 Footer, Header, News 등등 컴포넌트를 만들어서 메인페이지에 불러다 썼다.<br>
그리고 로고 이미지, 뉴스 이미지 등등 필요한 이미지나 png는 public폴더에 넣어서 롤 메인페이지를 만들어 보았었다.<br><br>

## 3주차 표에다가 하이퍼링크 달기
⤷ href="https://www.leagueoflegends.com/ko-kr/"를 a태그안에 href를 통해서 하이퍼 링크를 추가했다.<br>
그리고 처럼 img 태그를 통해서 이미지도 테이블 안에 추가 가능했다.<br><br>
<br><br>

## 4주차 네비게이션 바 하이퍼링크, 색상, 테이블 색상 적용하기
⤷ 네이베이션 바 하이퍼링크는 href="http://127.0.0.1:5501/" 태그안에 추가할 수 있었다.<br>
색상은 태그 내부에서  bgcolor="gray" 를 통해서 색상을 적용할 수 있었다.<br>
<br><br>

## 5주차 문자열 및 비속어 검사
⤷ if (searchTerm.length === 0) 을 통해서 문자열 길이가 0일때 중단 시키고, <br>
const badWords = ["시x", "병x", "개xx", "x", "ㅅx"];<br>
    for (let i = 0; i < badWords.length; i++) {<br>
      if (searchTerm.includes(badWords[i])) {<br>
        alert("검색어에 부적절한 단어가 포함되어 있습니다.");<br>
        return;<br>
      }<br>
    }<br>
를 통해서 미리 배열내에 블랙리스트 단어들을 만들어 둔 후, 만약 배열내 단어와 같다면, 함수 중단하게 즉, 검색이 안되게끔 했다.
<br><br>

## 6주차 logout.html & 로그아웃 버튼 만들기
⤷ 기존 index_login.html를 코드를 복사한 logout.html 만들고 사용했지만, 편리성을 위해서 코드 수정을 했다.<br>
로그아웃버튼->logout.html 로 이동->로그아웃버튼 을 해야 index.html 로 이동하게끔 했지만, 이 3단계를 거쳐서 로그아웃하는게 불편해서
지금은 로그아웃버튼->index.html 로 이동하게 했다.<br>
+ 나중에 세션을 배우면서 logout.js 또한 주석 처리 후 session에서 로그잇 & 로그아웃을 관리한다.<br>
물론 /page/logut.html 로 화면은 만들어둬서 주소로 입력해서 접근은 가능하다.
<br><br>

## 9주차 login.js check_input 수정하기
⤷ emailValue.length > 10 , passwordValue.length > 15 처럼 if 문 조건을 만들어주고 , <br>
const repeatPattern = /(.{3,})\1/; <br>
    if ( repeatPattern.test(emailValue) || repeatPattern.test(passwordValue) ) { <br>
        alert('3글자 이상 반복되는 문자열은 허용되지 않습니다.'); <br>
        login_failed(); updateLoginStatus(); <br>
        return false;<br>
    }<br>
const numRepeatPattern = /(\d{2,}).*\1/;<br>
    if ( numRepeatPattern.test(emailValue) || numRepeatPattern.test(passwordValue) ) {<br>
        alert('2글자 이상의 숫자 반복 입력은 허용되지 않습니다.');<br>
        login_failed(); updateLoginStatus();<br>
        return false;<br>
    }<br>
와 처럼 3글자 이상 반복과 2글자 이상 숫자 반복을 방지했다.
<br><br>

## 10주차 로그인 / 로그아웃 횟수 쿠키 저장하기
⤷ function login_count() { <br>
    let cnt = parseInt(getCookie("login_cnt"), 10);<br>
    if (isNaN(cnt)) cnt = 0;<br>
    cnt += 1;<br>
    setCookie("login_cnt", cnt, 365);<br>
}<br>
를 통해서 로그인시 login_cnt 라는 쿠키이름으로 cnt 값을 1씩 증가 시킨다.<br>
let cnt = parseInt(getCookie("login_cnt"), 10);<br>
    if (isNaN(cnt)) cnt = 0;<br>
    cnt = Math.max(cnt - 1, 0);<br>
    setCookie("login_cnt", cnt, 365);<br>
를 통해서 logout 함수 실행시 cnt를 -1 감소 시킨다. 만약 cnt가 0이면, Math.max(-1, 0)이 0이 되므로 더 이상 내려가지않는다.
<br><br>

## 10주차 세션 스토리지 로그아웃 구현 및 로그인 실패 횟수 구현
⤷ sessionStorage.removeItem("Session_Storage_id"); 를 통해서 세션에 있는 세션_id 삭제를 하고, <br>
function login_failed() { <br>
    let cnt = parseInt(getCookie("login_failed"), 10);<br>
    if (isNaN(cnt)) cnt = 0;<br>
    cnt += 1;<br>
    setCookie("login_failed", cnt, 1);<br>
    console.log(`로그인 실패 횟수: ${cnt}`);<br>=
  }<br>
함수를 통해서 실패시 login_failed cnt를 1씩 증가한다. 그리고 <br>
const MAX_FAIL = 3;<br>
function updateLoginStatus() {<br>
    const statusEl = document.getElementById("login_status");<br>
    let cnt = parseInt(getCookie("login_failed"), 10) || 0;<br>
    if (cnt >= MAX_FAIL) {<br>
      statusEl.innerText = `로그인 ${cnt}회 실패: 잠시 로그인 제한 상태입니다.`;<br>
    } else if (cnt > 0) {<br>
      statusEl.innerText = `로그인 실패: ${cnt}회 (3회 이상 제한)`;<br>
    } else {<br>
      statusEl.innerText = "";<br>
    }<br>
  }<br>
  를 통해서 3번 이상 틀렸을 시 로그인 제한 상태를 화면에 출력했다.<br>
  <br>

## 11주차 Crypto2.js 만들고 AES-256-GCM 대칭 암호 알고리즘 구현
⤷ 우선 기존 실습 때 했던 crypto.js는 AES-CBC 알고리즘으로 cryptoJS라이브러리를 사용했다.<br>
encodeByAES256(key, data)호출 → CryptoJS.AES.encrypt(…) → 결과를 Base64 문자열로 반환 이었고, 이 문자열을 sessionStorage에
session_storage_pass라는 세션으로 저장하였다.<br>
하지만 crypto2.js에서는 AES-GCM 알고리즘으로 브라우저 내장 Web Crypto API 사용했다.<br>
TextEncoder로 SECRET 문자열을 UTF-8 바이트로 변환 후, 처음 32바이트만 잘라서 crypto.subtle.importKey('raw', raw, {name:'AES-GCM'},…)로 암호화·복호화 가능한 CryptoKey 객체 생성했다.<br>
동작 흐름은 encryptSession(plainText) 를 통해서 랜덤 IV 생성 → crypto.subtle.encrypt({name:'AES-GCM', iv}, key, plainTextBytes) 호출 → ArrayBuffer(암호문+인증태그) 반환 → IV와 암호문을 각각 Base64로 인코딩해 "iv:ct" 형태의 문자열로 합쳐서 반환 → 이 문자열을 sessionStorage → 
"iv:ct"를 split(':') → Base64 디코딩 → IV와 암호문(Uint8Array)으로 분리 → crypto.subtle.decrypt({name:'AES-GCM', iv}, key, ctBytes) 호출 → 인증태그 검증 후 평문(ArrayBuffer) 반환 → TextDecoder로 디코딩해 원래 문자열 획득 하였다.<br>
따라서, sessionStorage_pass는 AES-CBC 방식으로 단순 암호화만 하고,sessionStorage_pass2는 AES-GCM 방식으로 암호화와 함께 데이터 무결성 검증(인증태그)을 제공하는 방식으로 동작한다.<br>
<br>

## 11주차 로그 아웃 처리
⤷ 세션과 쿠키를 삭제하기위해서 session.js 에서 로그아웃을 할 수있는 함수 session_del, logout 를 만들었다. <br>
  핵심으로는 하나의 아이템만 삭제하는 sessionStorage.removeItem("Session_Storage_id"); 방법과, deleteCookie("id"); 방법을 사용했다.<br>
  export function session_del() {<br>
    if (sessionStorage) {<br>
    sessionStorage.removeItem("Session_Storage_id");<br>
    alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');<br>
    } else {<br>
    alert("세션 스토리지 지원 x");<br>
    }<br>
}<br>
<br>
export function logout(event) {<br>
    if (event) event.preventDefault();<br>
    session_del();<br>
    let cnt = parseInt(getCookie("login_cnt"), 10);<br>
    if (isNaN(cnt)) cnt = 0;<br>
    cnt = Math.max(cnt - 1, 0);<br>
    setCookie("login_cnt", cnt, 365);<br>
    deleteCookie("id");<br>
    window.location.href = "/index.html";<br>
  }<br>
  와 같은 함수를 만들었다.<br>
<br>

## 12주차 회원 가입 후 암호화된 객체 저장하기 및 consol.log
⤷ session.js 에서 미리 session_set2라는 함수를 만들어뒀다. const en_text = encrypt_text(objString); 를 통해서 암호화를 하고 
const en_text = encrypt_text(objString);<br>
sessionStorage.setItem("Session_Storage_user",   signUpObj._email); <br>
sessionStorage.setItem("Session_Storage_object", objString);<br>
sessionStorage.setItem("Session_Storage_pass",   en_text);<br>
console.log("====== 세션 스토리지 전체 목록 ======");<br>
for (let i = 0; i < sessionStorage.length; i++) {<br>
  const key   = sessionStorage.key(i);<br>
  const value = sessionStorage.getItem(key);<br>
  console.log(key, ":", value); } <br>
처럼 세션을 스토리지에 저장 후, 콘솔 로그로 확인까지 했다. 암호화는 기존 crypto.js 에서 만들었던 encrypt_text() 를 활용했다.<br>
<br>

## 12주차 로그인 후 복호화 된 객체 내용 출력하기
⤷ login.js에서 init_logined() 함수를 만들어서 출력했다.<br>
sessionStorage.getItem를 통해서 해당 세션을 가져오고 기존 crypto.js와 crypto2.js 에서 만들어두었던,<br>
decrypt_text(),decryptSession() 함수를 호출해서 복호화를 하였다.<br>
그러고 console.log를 통해서 복호화된 객체를 출력하였다. 아래는 사용한 핵심 코드 들이다.<br>
const oldCipher = sessionStorage.getItem('Session_Storage_pass');<br>
const oldPlain = decrypt_text(oldCipher);<br>
console.log('복호화 결과 (Session_Storage_pass):', oldPlain);<br>
const newCipher = sessionStorage.getItem('Session_Storage_pass2');<br>
const newPlain = await decryptSession(newCipher);<br>
console.log('복호화 결과 (Session_Storage_pass2):', newPlain);<br>
<br>

## 13주차 카카오 맵 - 좌표로 주소 출력하기
⤷ 실습 때 까지 해뒀던, 지도 불러오기에서 좌표로 주소를 얻어내기 를 추가했다.<br>
제공해주는 javascripts를 map.js에 추가해주고, 제공해주는 html코드를<br>
profile.html 하단에 나타날 수 있도록 추가해주었다.<br>
교수님께서 style 태그 등 css 코드들은 css 폴더에 profile.css에 추가하라 하셔서 링크 태그를 추가하여, profile.css와 연동했다.<br>
<br>





