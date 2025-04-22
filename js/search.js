// --------------------------------------검색 + alert--------------------------------------
// document.getElementById("search_btn").addEventListener('click', search_message);
// function search_message(){
// alert("검색을 수행합니다!");
// }



// function googleSearch() {
//     const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
//     const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
//     alert("구글로 "+searchTerm+" 검색을 수행합니다!");
//     // 새 창에서 구글 검색을 수행
//     window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
// }

function googleSearch() {
    const rawTerm = document.getElementById("search_input").value; // 검색어로 설정
    const searchTerm = rawTerm.trim(); // 앞뒤 공백 제거
  
    // 1) 공백 검사
    if (searchTerm.length === 0) {
      alert("검색어를 입력해주세요.");
      return;
    }
  
    // 2) 비속어 검사용 배열 (원하는 단어 5개로 교체)
    const badWords = ["시발", "병신", "개새끼", "좆", "ㅅㅂ"];
  
    // 3) 배열과 반복문으로 포함 여부 확인
    for (let i = 0; i < badWords.length; i++) {
      if (searchTerm.includes(badWords[i])) {
        alert("검색어에 부적절한 단어가 포함되어 있습니다.");
        return;
      }
    }
  
    // 통과했으면 검색 수행
    const googleSearchUrl = 
      `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    alert("구글로 \"" + searchTerm + "\" 검색을 수행합니다!");
    window.open(googleSearchUrl, "_blank");
  }

// function NaverSearch() {
//     const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
//     const NaverSearchUrl = `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=${encodeURIComponent(searchTerm)}`;
//     alert("네이버 "+searchTerm+" 검색을 수행합니다!");
//     // 새 창에서 구글 검색을 수행
//     window.open(NaverSearchUrl, "_blank"); // 새로운 창에서 열기.
// }









