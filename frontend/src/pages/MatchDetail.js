import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaUser, FaUsers } from 'react-icons/fa';
import axios from 'axios';
import './MatchDetail.css';

const MatchDetail = () => {
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/matches/${id}`);
        setMatch(response.data);
      } catch (error) {
        console.error('Error fetching match:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatch();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="error-message">
        Không tìm thấy trận đấu
      </div>
    );
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'FINISHED': return 'Đã kết thúc';
      case 'LIVE': return 'Đang diễn ra';
      case 'SCHEDULED': return 'Sắp diễn ra';
      default: return status;
    }
  };

  return (
    <div className="match-detail-page">
      <div className="container">
        <Link to="/matches" className="back-link">
          <FaArrowLeft /> Quay lại danh sách trận đấu
        </Link>

        <div className="match-detail-card">
          <div className="match-header">
            <div className="match-competition">{match.competition}</div>
            <div className={`match-status ${match.matchStatus.toLowerCase()}`}>
              {getStatusText(match.matchStatus)}
            </div>
          </div>

          <div className="match-scoreboard">
            <div className="team home-team">
              <div className="team-name">{match.homeTeam}</div>
              {match.homeScore !== null && (
                <div className="team-score">{match.homeScore}</div>
              )}
            </div>
            
            <div className="match-center">
              <div className="match-vs">VS</div>
              {match.homeScore !== null && match.awayScore !== null && (
                <div className="final-score">
                  {match.homeScore} - {match.awayScore}
                </div>
              )}
            </div>
            
            <div className="team away-team">
              <div className="team-name">{match.awayTeam}</div>
              {match.awayScore !== null && (
                <div className="team-score">{match.awayScore}</div>
              )}
            </div>
          </div>

          <div className="match-info">
            <div className="info-item">
              <FaCalendar />
              <span>{new Date(match.matchDate).toLocaleDateString('vi-VN')}</span>
            </div>
            
            {match.stadium && (
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>{match.stadium}</span>
              </div>
            )}
            
            {match.referee && (
              <div className="info-item">
                <FaUser />
                <span>Trọng tài: {match.referee}</span>
              </div>
            )}
            
            {match.attendance && (
              <div className="info-item">
                <FaUsers />
                <span>Khán giả: {match.attendance.toLocaleString()}</span>
              </div>
            )}
          </div>

          {match.matchReport && (
            <div className="match-report">
              <h3>Báo cáo trận đấu</h3>
              <p>{match.matchReport}</p>
            </div>
          )}

          {match.highlightsUrl && (
            <div className="match-highlights">
              <h3>Điểm nhấn trận đấu</h3>
              <a href={match.highlightsUrl} target="_blank" rel="noopener noreferrer" className="highlights-link">
                Xem highlights
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchDetail; 