// 頁腳組件
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>陳昱安</h3>
          <p>前端開發者 / UI設計師</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/rax0609" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a> */}
          <a href="https://instagram.com/rox.r.374" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} 陳昱安 | 版權所有</p>
      </div>
    </footer>
  );
}

export default Footer;
