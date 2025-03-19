/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./Header.css";


function Header() {
  

  return (
    <header className="Header_header">
      <div className="Header_left">
        <img
          className="Header_riot_games_logo"
          alt="riot_games_logo"
          src="/riot_games_logo.png"
          style={{ cursor: "pointer" }}
        />

        <img
          className="Header_LoLlogo"
          alt="LoLlogo"
          src="/LoLlogo.png"
          style={{ cursor: "pointer" }}
        />



        {/* 상단 메뉴 */}
        <nav className="Header_nav">
          <ul>
            <a href="https://www.leagueoflegends.com/ko-kr/how-to-play/">
              <li className="menu-item" >
                  게임정보 <span className="arrow" style={{fontSize:"10px"}}>▼</span>
              </li>
            </a>
            <li className="menu-item" >
                새소식 <span className="arrow" style={{fontSize:"10px"}}>▼</span>
            </li>
            <li className="menu-item" >
                다운로드
            </li> 
            <li className="menu-item" >
                E스포츠 <span className="arrow" >↗</span>
            </li>
            <li className="menu-item" >
                이벤트 <span className="arrow" style={{fontSize:"10px"}}>▼</span>
            </li>
            <li className="menu-item" >
                알아보기 <span className="arrow" style={{fontSize:"10px"}}>▼</span>
            </li>
            <li className="menu-item" >
                유니버스 <span className="arrow">↗</span>
            </li>
            <li className="menu-item" >
                라이엇 스토어 <span className="arrow">↗</span>
            </li>
            <li className="menu-item" >
                고객지원 <span className="arrow">↗</span>
            </li>
          </ul>
        </nav>
 
        <button className="search-button">
            <img
            className="Header_search"
            alt="serarch"
            src="/search.png"
            style={{ cursor: "pointer" }}
            />
        </button>
        
        <button className="globe-button">
            <img
            className="Header_globe"
            alt="pngegg"
            src="/pngegg.png"
            style={{ cursor: "pointer" }}
            />
        </button>

        <button id="Header_JoinBut">회원가입</button>

        </div>
        

    </header>
  );
}

export default Header;
