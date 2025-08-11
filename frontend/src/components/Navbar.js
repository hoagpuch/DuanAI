import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">DuanAI</span>
          <span className="brand-subtitle">Football News</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Trang chủ
          </Link>
          <Link to="/news" className="nav-link" onClick={() => setIsOpen(false)}>
            Tin tức
          </Link>
          <Link to="/matches" className="nav-link" onClick={() => setIsOpen(false)}>
            Trận đấu
          </Link>
          <Link to="/standings" className="nav-link" onClick={() => setIsOpen(false)}>
            Bảng xếp hạng
          </Link>
          <Link to="/statistics" className="nav-link" onClick={() => setIsOpen(false)}>
            Thống kê
          </Link>
        </div>

        <div className="navbar-search">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Tìm kiếm tin tức, trận đấu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 