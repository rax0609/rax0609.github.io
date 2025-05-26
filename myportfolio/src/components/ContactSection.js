// 聯絡方式區塊組件
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function ContactSection() {
  return (
    <div className="contact-container" id="contact">
      <div className="section-title">
        <h2>聯絡我</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>讓我們取得聯繫</h3>
          <p>
            無論是工作機會、合作提案或是任何問題，都歡迎與我聯繫。我將盡快回覆您的訊息。
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-text">
                <h4>電子郵件</h4>
                <p>example@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-text">
                <h4>電話</h4>
                <p>0912-345-678</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-text">
                <h4>地址</h4>
                <p>台灣台南市</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="您的姓名" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="您的電子郵件" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="主旨" required />
            </div>
            <div className="form-group">
              <textarea placeholder="您的訊息" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">發送訊息</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
