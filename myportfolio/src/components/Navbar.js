// 導航欄組件
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        <Link to="home" className="navbar-logo" onClick={closeMobileMenu} smooth={true} duration={500}>
          個人檔案
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="home" className="nav-links" onClick={closeMobileMenu} smooth={true} duration={500}>
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-links" onClick={closeMobileMenu} smooth={true} duration={500}>
              關於我
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" className="nav-links" onClick={closeMobileMenu} smooth={true} duration={500}>
              技能
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" className="nav-links" onClick={closeMobileMenu} smooth={true} duration={500}>
              作品
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="contact" className="nav-links" onClick={closeMobileMenu} smooth={true} duration={500}>
              聯絡方式
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
