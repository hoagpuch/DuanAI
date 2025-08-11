import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaSearch, FaNewspaper, FaFutbol, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [news, setNews] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('news');
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query]);

  const performSearch = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const [newsResponse, matchesResponse] = await Promise.all([
        axios.get(`/api/news/search?keyword=${encodeURIComponent(query)}`),
        axios.get(`/api/matches/search?teamName=${encodeURIComponent(query)}`)
      ]);

      setNews(newsResponse.data);
      setMatches(matchesResponse.data);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-header">
          <h1 className="search-title">
            Kết quả tìm kiếm cho: <span className="search-query">"{query}"</span>
          </h1>
          <p className="search-subtitle">
            Tìm thấy {news.length} tin tức và {matches.length} trận đấu
          </p>
        </div>

        <div className="search-tabs">
          <button
            className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            <FaNewspaper /> Tin tức ({news.length})
          </button>
          <button
            className={`tab-button ${activeTab === 'matches' ? 'active' : ''}`}
            onClick={() => setActiveTab('matches')}
          >
            <FaFutbol /> Trận đấu ({matches.length})
          </button>
        </div>

        <div className="search-results">
          {activeTab === 'news' && (
            <div className="news-results">
              {news.length > 0 ? (
                <div className="news-grid">
                  {news.map((item) => (
                    <div key={item.id} className="news-card">
                      <div className="news-image">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="news-category">{item.category}</div>
                      </div>
                      <div className="news-content">
                        <h3 className="news-title">{item.title}</h3>
                        <p className="news-excerpt">
                          {item.content.substring(0, 120)}...
                        </p>
                        <div className="news-meta">
                          <span className="news-author">{item.author}</span>
                          <span className="news-date">
                            {new Date(item.publishedDate).toLocaleDateString('vi-VN')}
                          </span>
                        </div>
                        <Link to={`/news/${item.id}`} className="read-more">
                          Đọc thêm <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <FaSearch />
                  <h3>Không tìm thấy tin tức nào</h3>
                  <p>Thử tìm kiếm với từ khóa khác</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'matches' && (
            <div className="matches-results">
              {matches.length > 0 ? (
                <div className="matches-grid">
                  {matches.map((match) => (
                    <div key={match.id} className="match-card">
                      <div className="match-header">
                        <span className="match-competition">{match.competition}</span>
                        <span className={`match-status ${match.matchStatus.toLowerCase()}`}>
                          {match.matchStatus === 'FINISHED' ? 'Đã kết thúc' : 
                           match.matchStatus === 'LIVE' ? 'Đang diễn ra' : 'Sắp diễn ra'}
                        </span>
                      </div>
                      <div className="match-teams">
                        <div className="team home">
                          <span className="team-name">{match.homeTeam}</span>
                          {match.homeScore !== null && (
                            <span className="team-score">{match.homeScore}</span>
                          )}
                        </div>
                        <div className="match-vs">VS</div>
                        <div className="team away">
                          <span className="team-name">{match.awayTeam}</span>
                          {match.awayScore !== null && (
                            <span className="team-score">{match.awayScore}</span>
                          )}
                        </div>
                      </div>
                      <div className="match-footer">
                        <span className="match-date">
                          {new Date(match.matchDate).toLocaleDateString('vi-VN')}
                        </span>
                        {match.stadium && (
                          <span className="match-stadium">{match.stadium}</span>
                        )}
                      </div>
                      <Link to={`/matches/${match.id}`} className="match-link">
                        Xem chi tiết
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <FaSearch />
                  <h3>Không tìm thấy trận đấu nào</h3>
                  <p>Thử tìm kiếm với từ khóa khác</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search; 