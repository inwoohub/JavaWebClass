import './Main.css';
import Header from "../components/Header";
import News from "../components/News";


function Main() {
    return (
        <div>
            <Header className="Header.header" />

            <div style={{ position: 'relative', width: '100%', height: '98vh' }}>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }} 
              >
                <source src="/LoLvideo.mp4" type="video/mp4" />
                브라우저가 동영상 태그를 지원하지 않습니다.
              </video>
              <img
                className="LOLlogo2"
                alt="LOLlogo2"
                src="/LOLlogo2.png"
                style={{ position: 'absolute', top: '36vh', left: '38vw', cursor: 'pointer' }}
              />
              <button className='video_button'>
                무료로 플레이하기
              </button>
            </div>
            
            <News className="News"/>
        </div>
      );

}
  export default Main;
     