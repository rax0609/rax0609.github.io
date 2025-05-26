// 首頁hero區塊組件
import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function HeroSection() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1>您好，我是<span className="highlight">陳昱安</span></h1>
        <h2>前端開發者 / UI設計師</h2>
        <p>我專注於創建美觀且功能強大的網頁應用</p>
        <div className="hero-btns">
          <Link to="contact" className="btn-primary" smooth={true} duration={500}>
            聯絡我
          </Link>
          <Link to="projects" className="btn-outline" smooth={true} duration={500}>
            查看作品
          </Link>
        </div>
        <div className="social-icons">
          <a href="https://github.com/rax0609" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
