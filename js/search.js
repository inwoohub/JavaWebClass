// --------------------------------------검색 + alert--------------------------------------
// document.getElementById("search_btn").addEventListener('click', search_message);
// function search_message(){
// alert("검색을 수행합니다!");
// }



function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    alert("구글로 "+searchTerm+" 검색을 수행합니다!");
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
}

function NaverSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const NaverSearchUrl = `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=${encodeURIComponent(searchTerm)}`;
    alert("네이버 "+searchTerm+" 검색을 수행합니다!");
    // 새 창에서 구글 검색을 수행
    window.open(NaverSearchUrl, "_blank"); // 새로운 창에서 열기.
}









