import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaNewspaper, FaFutbol, FaChartLine, FaGlobe, FaTrophy, FaUsers, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsResponse, matchesResponse] = await Promise.all([
          axios.get('/api/news/featured'),
          axios.get('/api/matches/recent')
        ]);
        
        setFeaturedNews(newsResponse.data.slice(0, 3));
        setRecentMatches(matchesResponse.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback to mock data if API fails
        setFeaturedNews([
          {
            id: 1,
            title: "Haaland ghi bàn thắng thứ 50 trong mùa giải",
            content: "Erling Haaland đã ghi bàn thắng thứ 50 trong mùa giải 2023/24...",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
            publishedDate: "2024-01-15"
          },
          {
            id: 2,
            title: "Real Madrid ký hợp đồng với Mbappé",
            content: "Real Madrid đã chính thức công bố việc ký hợp đồng với Kylian Mbappé...",
            imageUrl: "https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=400",
            publishedDate: "2024-01-14"
          },
          {
            id: 3,
            title: "Việt Nam thắng Thái Lan 2-0 tại vòng loại World Cup",
            content: "Đội tuyển Việt Nam đã giành chiến thắng quan trọng trước Thái Lan...",
            imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
            publishedDate: "2024-01-13"
          }
        ]);
        setRecentMatches([
          {
            id: 1,
            homeTeam: "Manchester City",
            awayTeam: "Arsenal",
            homeScore: 3,
            awayScore: 1,
            matchDate: "2024-01-15",
            competition: "Premier League"
          },
          {
            id: 2,
            homeTeam: "Real Madrid",
            awayTeam: "Barcelona",
            homeScore: 3,
            awayScore: 0,
            matchDate: "2024-01-14",
            competition: "La Liga"
          },
          {
            id: 3,
            homeTeam: "Liverpool",
            awayTeam: "Manchester United",
            homeScore: 2,
            awayScore: 0,
            matchDate: "2024-01-13",
            competition: "Premier League"
          },
          {
            id: 4,
            homeTeam: "Việt Nam",
            awayTeam: "Thái Lan",
            homeScore: 2,
            awayScore: 0,
            matchDate: "2024-01-12",
            competition: "Vòng loại World Cup 2026"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Tin Tức Bóng Đá
              <span className="highlight"> Hot Nhất</span>
            </h1>
            <p className="hero-subtitle">
              Cập nhật liên tục những tin tức bóng đá mới nhất, kết quả trận đấu, 
              chuyển nhượng và phân tích chuyên sâu từ các chuyên gia hàng đầu
            </p>
            <div className="hero-buttons">
              <Link to="/news" className="btn btn-primary">
                Xem tin tức mới nhất
                <FaArrowRight />
              </Link>
              <Link to="/matches" className="btn btn-secondary">
                Kết quả trận đấu
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="hero-card-content">
                <h3>Tin tức nổi bật</h3>
                <p>Khám phá những tin tức bóng đá hot nhất trong ngày</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access">
        <div className="container">
          <h2 className="section-title">Truy cập nhanh</h2>
          <div className="quick-access-grid">
            <Link to="/standings" className="quick-access-card">
              <div className="quick-access-icon">
                <FaTrophy />
              </div>
              <div className="quick-access-content">
                <h3>Bảng xếp hạng</h3>
                <p>Xem bảng xếp hạng các giải đấu hàng đầu</p>
              </div>
            </Link>
            <Link to="/statistics" className="quick-access-card">
              <div className="quick-access-icon">
                <FaChartLine />
              </div>
              <div className="quick-access-content">
                <h3>Thống kê</h3>
                <p>Thống kê cầu thủ và đội bóng chi tiết</p>
              </div>
            </Link>
            <Link to="/team/manchester-city" className="quick-access-card">
              <div className="quick-access-icon">
                <FaUsers />
              </div>
              <div className="quick-access-content">
                <h3>Hồ sơ đội bóng</h3>
                <p>Thông tin chi tiết về các đội bóng</p>
              </div>
            </Link>
            <Link to="/search" className="quick-access-card">
              <div className="quick-access-icon">
                <FaSearch />
              </div>
              <div className="quick-access-content">
                <h3>Tìm kiếm</h3>
                <p>Tìm kiếm tin tức và thông tin bóng đá</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Tại sao chọn DuanAI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaNewspaper />
              </div>
              <h3>Tin tức cập nhật 24/7</h3>
              <p>Luôn cập nhật những tin tức bóng đá mới nhất từ khắp nơi trên thế giới</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaFutbol />
              </div>
              <h3>Kết quả trận đấu real-time</h3>
              <p>Theo dõi kết quả trận đấu theo thời gian thực với thống kê chi tiết</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Phân tích chuyên sâu</h3>
              <p>Những bài phân tích chất lượng từ các chuyên gia bóng đá hàng đầu</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaGlobe />
              </div>
              <h3>Bao phủ toàn cầu</h3>
              <p>Tin tức từ tất cả các giải đấu lớn trên thế giới</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="featured-news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tin tức nổi bật</h2>
            <Link to="/news" className="view-all-link">
              Xem tất cả
              <FaArrowRight />
            </Link>
          </div>
          <div className="news-grid">
            {featuredNews.map((news) => (
              <article key={news.id} className="news-card">
                <div className="news-image">
                  <img src={news.imageUrl} alt={news.title} />
                </div>
                <div className="news-content">
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-excerpt">{news.content}</p>
                  <div className="news-meta">
                    <span className="news-date">{news.publishedDate}</span>
                  </div>
                  <Link to={`/news/${news.id}`} className="read-more">
                    Đọc thêm
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Matches Section */}
      <section className="recent-matches">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kết quả trận đấu gần đây</h2>
            <Link to="/matches" className="view-all-link">
              Xem tất cả
              <FaArrowRight />
            </Link>
          </div>
          <div className="matches-grid">
            {recentMatches.map((match) => (
              <div key={match.id} className="match-card">
                <div className="match-header">
                  <span className="match-competition">{match.competition}</span>
                  <span className="match-date">{match.matchDate}</span>
                </div>
                <div className="match-teams">
                  <div className="team home-team">
                    <span className="team-name">{match.homeTeam}</span>
                    <span className="team-score">{match.homeScore}</span>
                  </div>
                  <div className="match-vs">vs</div>
                  <div className="team away-team">
                    <span className="team-score">{match.awayScore}</span>
                    <span className="team-name">{match.awayTeam}</span>
                  </div>
                </div>
                <Link to={`/matches/${match.id}`} className="match-details">
                  Xem chi tiết
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Teams Section */}
      <section className="popular-teams">
        <div className="container">
          <h2 className="section-title">Đội bóng nổi bật</h2>
          <div className="teams-grid">
            <Link to="/team/manchester-city" className="team-card">
              <div className="team-logo">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200" alt="Manchester City" />
              </div>
              <h3>Manchester City</h3>
              <p>Premier League</p>
            </Link>
            <Link to="/team/real-madrid" className="team-card">
              <div className="team-logo">
                <img src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=200" alt="Real Madrid" />
              </div>
              <h3>Real Madrid</h3>
              <p>La Liga</p>
            </Link>
            <Link to="/team/liverpool" className="team-card">
              <div className="team-logo">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200" alt="Liverpool" />
              </div>
              <h3>Liverpool</h3>
              <p>Premier League</p>
            </Link>
            <Link to="/team/barcelona" className="team-card">
              <div className="team-logo">
                <img src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=200" alt="Barcelona" />
              </div>
              <h3>Barcelona</h3>
              <p>La Liga</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Không bỏ lỡ tin tức bóng đá hot nhất</h2>
            <p>Đăng ký nhận thông báo để cập nhật tin tức bóng đá mới nhất</p>
            <div className="cta-buttons">
              <Link to="/news" className="btn btn-primary">
                Xem tin tức ngay
                <FaArrowRight />
              </Link>
              <Link to="/matches" className="btn btn-secondary">
                Xem trận đấu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 