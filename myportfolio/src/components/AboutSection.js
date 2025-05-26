// 關於我區塊組件
import React from 'react';
import '../App.css';

function AboutSection() {
  return (
    <div className="about-container" id="about">
      <div className="section-title">
        <h2>關於我</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          {/* 可替換為您自己的照片 */}
          <div className="profile-img-placeholder">
            {/* <span>您的照片</span> */}
            <img src="/images/coffee.png" alt="咖啡" className="profile-img" />
          </div>
        </div>
        <div className="about-text">
          <h3>我是陳昱安，<span className="highlight">前端開發者</span></h3>
          <p>
            一個資訊工程系的專科學生
          </p>
          <p>
            現任: 軟體工程師,RX-BOT創辦人,GDSC成員
          </p>
          <p>
            開發作品: RX-BOT機器人,GCS訓練系統,Zipos短網址服務
          </p>
          <div className="personal-info">
            <div className="info-item">
              <span className="info-title">姓名:</span>
              <span>陳昱安</span>
            </div>
            <div className="info-item">
              <span className="info-title">生日:</span>
              <span>2007年6月9日</span>
            </div>
            <div className="info-item">
              <span className="info-title">電子郵件:</span>
              <span>rx@rx.futuracept.com</span>
            </div>
            {/* <div className="info-item">
              <span className="info-title">電話:</span>
              <span>0912-345-678</span>
            </div> */}
            <div className="info-item">
              <span className="info-title">學歷:</span>
              <span>南臺科大資訊工程系</span>
            </div>
            <div className="info-item">
              <span className="info-title">所在地:</span>
              <span>臺灣新北市</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
