/* eslint-disable */

import "./Footer.css";


function Footer() {
  

  return (
    <div className="Footer_page">
        <div className="Footer_logo_item">
            <button className="Footer_logo_button">
                <img
                    className="Footer_youtube"
                    alt="Footer_youtube"
                    src="/youtube.png"
                    style={{ cursor: "pointer" }}
                />
            </button>
            <button className="Footer_logo_button">
                <img
                    className="Footer_instargram"
                    alt="Footer_instargram"
                    src="/instargram.png"
                    style={{ cursor: "pointer" }}
                />
            </button>
            <button className="Footer_facebook_button">
                <img
                    className="Footer_facebook"
                    alt="Footer_facebook"
                    src="/facebook.png"
                    style={{ cursor: "pointer" }}
                />
            </button>
            <button className="Footer_logo_button">
                <img
                    className="Footer_twitter"
                    alt="Footer_twitter"
                    src="/twitter.png"
                    style={{ cursor: "pointer" }}
                />
            </button>
            <button className="Footer_logo_button">
                <img
                    className="Footer_reddit"
                    alt="Footer_reddit"
                    src="/reddit.png"
                    style={{ cursor: "pointer" }}
                />
            </button>
        </div>
        <div style={{justifyContent:"center",display:"flex",marginTop:"5vh"}}>
            <img
            className="Footer_riot_games_logo"
            alt="riotlogo3"
            src="/riotlogo3.png"
            style={{ cursor: "pointer" }}
            />
        </div>
        <div>
            <text className="Footer_text">
            <br />™&ⓒ 2025 Riot Games, Inc. League of Legends and all related logos, characters, names and distinctive <br />
            
            </text>
        </div>
        <div>
            <text className="Footer_text">
            likenesses therof are exclusive property of Riot Games, Inc. All rightes Reserved.<br /><br />
            </text>
        </div>
        <div>
            <text className="Footer_text">
            라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층 (삼성동, 파르나스 타워)<br />
            </text>
        </div>
        <div>
            <text className="Footer_text">
            대표자 : 조혁진 | 대표전화 : 02-3454-1560 | FAX : 02-3454-1565 사업자등록번호 : 120-87-68488<br />
            </text>
        </div>
        <div>
            <text className="Footer_text">
            통신판매업신고 : 2011-서울강남-02718
            </text>
        </div>
        <div className="footer-links">
            <span className="footer-link">서비스 약관</span>
            <span className="footer-link">개인정보 처리방침</span>
            <span className="footer-link">서비스 상태</span>
            <span className="footer-link">게임시간 선택제</span>
            <span className="footer-link">사회공헌</span>
            <span className="footer-link">사업자정보확인</span>
            <span className="footer-link">쿠키설정</span>
        </div>

        <div style={{display:"flex",justifyContent:"center",marginTop:"5vh"}}>
            <img
                className="Footer_LoLfooter"
                alt="LoLfooter"
                src="LoLfooter.png"
                style={{ cursor: "pointer" }}
            />
        </div>

    </div>
  );
}

export default Footer;
