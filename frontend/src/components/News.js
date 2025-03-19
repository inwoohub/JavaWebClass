/* eslint-disable */

import "./News.css";


function News() {
  

  return (
    <div className="News_Page">
        <h1 style={{
            
        }}>
            주목할 만한 소식
        </h1>
        
        <div className="News_structure">
            <div className="News_item">
                <img
                    className="News_testimage"
                    alt="testimage"
                    src="/testimage.png"
                    style={{ cursor: "pointer" }}
                />
                <div style={{marginTop:"1vh",marginBottom:"1vh"}}>
                    <text style={{fontSize:"14px",fontWeight:"bold",marginRight:"0.5vw",
                    color:"hsl(46, 100%, 36%)",marginLeft:"0.3vw"}}>
                        공지사항
                    </text>
                    <text style={{marginRight:"0.5vw",color:"rgb(136,135,135)"}}>
                        |
                    </text>
                    <text>
                        2025.03.17
                    </text>
                </div>
                <div style={{marginLeft:"0.3vw",marginBottom:"1vh"}}>
                    <text className="News_textitem">
                        한화생명e스포츠의 2025 퍼스트 스탠드 토너먼트 우승을 축하합니다!
                    </text>
                </div>
                <div style={{marginLeft:"0.3vw"}}>
                    <text>
                        우승을 축하하는 기념 이벤트를 확인해 보세요.
                    </text>
                </div>
            </div>

            <div className="News_item">
                <img
                    className="News_testimage2"
                    alt="testimage2"
                    src="/testimage2.png"
                    style={{ cursor: "pointer" }}
                />
                <div style={{marginTop:"1vh",marginBottom:"1vh"}}>
                    <text style={{fontSize:"14px",fontWeight:"bold",marginRight:"0.5vw",
                    color:"hsl(46, 100%, 36%)",marginLeft:"0.3vw"}}>
                        개발자 블로그
                    </text>
                    <text style={{marginRight:"0.5vw",color:"rgb(136,135,135)"}}>
                        |
                    </text>
                    <text>
                        2025.03.17
                    </text>
                </div>
                <div style={{marginLeft:"0.3vw",marginBottom:"1vh"}}>
                    <text className="News_textitem">
                        전략적 팀 전투 개발자 일기: 사이버 시티
                    </text>
                </div>
                <div style={{marginLeft:"0.3vw"}}>
                    <text>
                        나만의 팀을 만드세요. 영역을 넓히세요. 시스템을 해킹하세요.
                    </text> 
                </div>
            </div>

            <div className="News_item"> 
                <img
                    className="News_testimage3"
                    alt="testimag3e"
                    src="/testimage3.png"
                    style={{ cursor: "pointer" }}
                />
                <div style={{marginTop:"1vh",marginBottom:"1vh"}}>
                    <text style={{fontSize:"14px",fontWeight:"bold",marginRight:"0.5vw",
                    color:"hsl(46, 100%, 36%)",marginLeft:"0.3vw"}}>
                        게임 업데이트
                    </text>
                    <text style={{marginRight:"0.5vw",color:"rgb(136,135,135)"}}>
                        |
                    </text>
                    <text>
                        2025.03.17
                    </text>
                </div>
                <div style={{marginLeft:"0.3vw",marginBottom:"1vh"}}>
                    <text className="News_textitem">
                        사이버 시티 개요
                    </text>
                </div>
                <div style={{marginLeft:"0.3vw"}}>
                    <text>
                        접속해 사이버 시티의 거리를 강타할 전략적 팀 전투의 새로운 챔피언들에 대해 알아보세요!
                    </text>
                </div>
            </div>
        </div>
    </div>
  );
}

export default News;
