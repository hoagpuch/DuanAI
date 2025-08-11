import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DuanAI Football News</h3>
            <p className="footer-description">
              Nguồn tin tức bóng đá đáng tin cậy nhất, cập nhật liên tục những thông tin mới nhất 
              về bóng đá Việt Nam và thế giới.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Tin tức</h4>
            <ul className="footer-links">
              <li><Link to="/news">Tin tức mới nhất</Link></li>
              <li><Link to="/news?category=Premier League">Premier League</Link></li>
              <li><Link to="/news?category=La Liga">La Liga</Link></li>
              <li><Link to="/news?category=Champions League">Champions League</Link></li>
              <li><Link to="/news?category=Đội tuyển Việt Nam">Đội tuyển Việt Nam</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Trận đấu</h4>
            <ul className="footer-links">
              <li><Link to="/matches">Tất cả trận đấu</Link></li>
              <li><Link to="/matches?status=LIVE">Trận đấu đang diễn ra</Link></li>
              <li><Link to="/matches?status=SCHEDULED">Trận đấu sắp diễn ra</Link></li>
              <li><Link to="/matches?status=FINISHED">Kết quả trận đấu</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liên hệ</h4>
            <ul className="footer-links">
              <li><a href="mailto:contact@duanai.com">contact@duanai.com</a></li>
              <li><a href="tel:+84123456789">+84 123 456 789</a></li>
              <li>Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 DuanAI Football News. Được tạo với <FaHeart className="heart" /> bởi Hoàng Phúc</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Chính sách bảo mật</Link>
              <Link to="/terms">Điều khoản sử dụng</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 