import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaFutbol, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import './Matches.css';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const url = status ? `/api/matches/status/${status}` : '/api/matches';
        const response = await axios.get(url);
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [status]);

  const getStatusText = (status) => {
    switch (status) {
      case 'FINISHED': return 'Đã kết thúc';
      case 'LIVE': return 'Đang diễn ra';
      case 'SCHEDULED': return 'Sắp diễn ra';
      default: return status;
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
    <div className="matches-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            {status ? `Trận đấu ${getStatusText(status)}` : 'Tất cả trận đấu'}
          </h1>
          <p className="page-subtitle">
            Theo dõi kết quả và lịch thi đấu các trận đấu bóng đá
          </p>
        </div>

        <div className="matches-grid">
          {matches.map((match) => (
            <div key={match.id} className="match-card">
              <div className="match-header">
                <span className="match-competition">{match.competition}</span>
                <span className={`match-status ${match.matchStatus.toLowerCase()}`}>
                  {getStatusText(match.matchStatus)}
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
              
              <div className="match-details">
                <div className="match-info">
                  <span className="info-item">
                    <FaCalendar /> {new Date(match.matchDate).toLocaleDateString('vi-VN')}
                  </span>
                  {match.stadium && (
                    <span className="info-item">
                      <FaMapMarkerAlt /> {match.stadium}
                    </span>
                  )}
                </div>
                
                {match.referee && (
                  <div className="match-referee">
                    Trọng tài: {match.referee}
                  </div>
                )}
                
                {match.attendance && (
                  <div className="match-attendance">
                    Khán giả: {match.attendance.toLocaleString()}
                  </div>
                )}
              </div>
              
              <Link to={`/matches/${match.id}`} className="match-link">
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>

        {matches.length === 0 && (
          <div className="no-matches">
            <h3>Không có trận đấu nào</h3>
            <p>Vui lòng thử lại sau hoặc chọn trạng thái khác</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches; 