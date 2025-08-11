import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';
import './Standings.css';

const Standings = () => {
    const [selectedLeague, setSelectedLeague] = useState('Premier League');
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    const leagues = [
        { id: 'Premier League', name: 'Premier League', country: 'England' },
        { id: 'La Liga', name: 'La Liga', country: 'Spain' },
        { id: 'Serie A', name: 'Serie A', country: 'Italy' },
        { id: 'Bundesliga', name: 'Bundesliga', country: 'Germany' },
        { id: 'Ligue 1', name: 'Ligue 1', country: 'France' },
        { id: 'V-League', name: 'V-League', country: 'Vietnam' }
    ];

    // Mock standings data - in a real app, this would come from the API
    const mockStandings = {
        'Premier League': [
            { position: 1, team: 'Liverpool', played: 38, won: 28, drawn: 8, lost: 2, goalsFor: 85, goalsAgainst: 26, points: 92, form: 'WWWWD' },
            { position: 2, team: 'Manchester City', played: 38, won: 27, drawn: 7, lost: 4, goalsFor: 91, goalsAgainst: 33, points: 88, form: 'WWWWW' },
            { position: 3, team: 'Arsenal', played: 38, won: 25, drawn: 8, lost: 5, goalsFor: 75, goalsAgainst: 29, points: 83, form: 'WWDLW' },
            { position: 4, team: 'Aston Villa', played: 38, won: 20, drawn: 8, lost: 10, goalsFor: 76, goalsAgainst: 61, points: 68, form: 'WDLWW' },
            { position: 5, team: 'Tottenham', played: 38, won: 20, drawn: 6, lost: 12, goalsFor: 74, goalsAgainst: 61, points: 66, form: 'LWWDL' },
            { position: 6, team: 'Chelsea', played: 38, won: 18, drawn: 9, lost: 11, goalsFor: 77, goalsAgainst: 63, points: 63, form: 'WWLWD' },
            { position: 7, team: 'Newcastle', played: 38, won: 18, drawn: 6, lost: 14, goalsFor: 85, goalsAgainst: 62, points: 60, form: 'LWWDL' },
            { position: 8, team: 'Manchester United', played: 38, won: 18, drawn: 6, lost: 14, goalsFor: 57, goalsAgainst: 58, points: 60, form: 'DLWWD' },
            { position: 9, team: 'West Ham', played: 38, won: 14, drawn: 10, lost: 14, goalsFor: 60, goalsAgainst: 74, points: 52, form: 'WDLWL' },
            { position: 10, team: 'Crystal Palace', played: 38, won: 13, drawn: 10, lost: 15, goalsFor: 57, goalsAgainst: 58, points: 49, form: 'DLWWD' }
        ],
        'La Liga': [
            { position: 1, team: 'Real Madrid', played: 38, won: 29, drawn: 6, lost: 3, goalsFor: 87, goalsAgainst: 26, points: 93, form: 'WWWWW' },
            { position: 2, team: 'Barcelona', played: 38, won: 25, drawn: 7, lost: 6, goalsFor: 79, goalsAgainst: 44, points: 82, form: 'WWDLW' },
            { position: 3, team: 'Girona', played: 38, won: 25, drawn: 6, lost: 7, goalsFor: 85, goalsAgainst: 46, points: 81, form: 'WDLWW' },
            { position: 4, team: 'Atlético Madrid', played: 38, won: 24, drawn: 4, lost: 10, goalsFor: 70, goalsAgainst: 43, points: 76, form: 'LWWDL' },
            { position: 5, team: 'Athletic Bilbao', played: 38, won: 19, drawn: 11, lost: 8, goalsFor: 61, goalsAgainst: 37, points: 68, form: 'WWLWD' }
        ],
        'Serie A': [
            { position: 1, team: 'Inter Milan', played: 38, won: 29, drawn: 7, lost: 2, goalsFor: 89, goalsAgainst: 22, points: 94, form: 'WWWWW' },
            { position: 2, team: 'AC Milan', played: 38, won: 22, drawn: 9, lost: 7, goalsFor: 76, goalsAgainst: 49, points: 75, form: 'WWDLW' },
            { position: 3, team: 'Juventus', played: 38, won: 19, drawn: 14, lost: 5, goalsFor: 54, goalsAgainst: 31, points: 71, form: 'WDLWW' },
            { position: 4, team: 'Atalanta', played: 38, won: 21, drawn: 6, lost: 11, goalsFor: 69, goalsAgainst: 45, points: 69, form: 'LWWDL' },
            { position: 5, team: 'Bologna', played: 38, won: 18, drawn: 14, lost: 6, goalsFor: 54, goalsAgainst: 39, points: 68, form: 'WWLWD' }
        ],
        'Bundesliga': [
            { position: 1, team: 'Bayer Leverkusen', played: 34, won: 28, drawn: 6, lost: 0, goalsFor: 89, goalsAgainst: 24, points: 90, form: 'WWWWW' },
            { position: 2, team: 'Stuttgart', played: 34, won: 23, drawn: 4, lost: 7, goalsFor: 78, goalsAgainst: 39, points: 73, form: 'WWDLW' },
            { position: 3, team: 'Bayern Munich', played: 34, won: 23, drawn: 3, lost: 8, goalsFor: 94, goalsAgainst: 45, points: 72, form: 'WDLWW' },
            { position: 4, team: 'RB Leipzig', played: 34, won: 19, drawn: 8, lost: 7, goalsFor: 77, goalsAgainst: 39, points: 65, form: 'LWWDL' },
            { position: 5, team: 'Borussia Dortmund', played: 34, won: 18, drawn: 9, lost: 7, goalsFor: 68, goalsAgainst: 43, points: 63, form: 'WWLWD' }
        ],
        'Ligue 1': [
            { position: 1, team: 'PSG', played: 34, won: 22, drawn: 10, lost: 2, goalsFor: 81, goalsAgainst: 33, points: 76, form: 'WWWWW' },
            { position: 2, team: 'Monaco', played: 34, won: 20, drawn: 7, lost: 7, goalsFor: 68, goalsAgainst: 42, points: 67, form: 'WWDLW' },
            { position: 3, team: 'Brest', played: 34, won: 17, drawn: 10, lost: 7, goalsFor: 53, goalsAgainst: 34, points: 61, form: 'WDLWW' },
            { position: 4, team: 'Lille', played: 34, won: 16, drawn: 11, lost: 7, goalsFor: 52, goalsAgainst: 34, points: 59, form: 'LWWDL' },
            { position: 5, team: 'Nice', played: 34, won: 15, drawn: 10, lost: 9, goalsFor: 40, goalsAgainst: 29, points: 55, form: 'WWLWD' }
        ],
        'V-League': [
            { position: 1, team: 'Hà Nội FC', played: 20, won: 15, drawn: 3, lost: 2, goalsFor: 45, goalsAgainst: 15, points: 48, form: 'WWWWW' },
            { position: 2, team: 'Bình Dương', played: 20, won: 12, drawn: 5, lost: 3, goalsFor: 38, goalsAgainst: 20, points: 41, form: 'WWDLW' },
            { position: 3, team: 'Hoàng Anh Gia Lai', played: 20, won: 11, drawn: 6, lost: 3, goalsFor: 35, goalsAgainst: 18, points: 39, form: 'WDLWW' },
            { position: 4, team: 'Thanh Hóa', played: 20, won: 10, drawn: 7, lost: 3, goalsFor: 32, goalsAgainst: 19, points: 37, form: 'LWWDL' },
            { position: 5, team: 'Sông Lam Nghệ An', played: 20, won: 9, drawn: 8, lost: 3, goalsFor: 30, goalsAgainst: 18, points: 35, form: 'WWLWD' }
        ]
    };

    useEffect(() => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setStandings(mockStandings[selectedLeague] || []);
            setLoading(false);
        }, 500);
    }, [selectedLeague]);

    const getFormColor = (form) => {
        const lastResult = form.charAt(form.length - 1);
        switch (lastResult) {
            case 'W': return '#22c55e';
            case 'D': return '#f59e0b';
            case 'L': return '#ef4444';
            default: return '#6b7280';
        }
    };

    const getPositionClass = (position) => {
        if (position <= 4) return 'champions-league';
        if (position <= 6) return 'europa-league';
        if (position <= 17) return 'relegation';
        return '';
    };

    return (
        <div className="standings-container">
            <div className="standings-header">
                <h1>Bảng xếp hạng</h1>
                <p>Xem bảng xếp hạng các giải đấu hàng đầu thế giới</p>
            </div>

            <div className="league-selector">
                {leagues.map((league) => (
                    <button
                        key={league.id}
                        className={`league-btn ${selectedLeague === league.id ? 'active' : ''}`}
                        onClick={() => setSelectedLeague(league.id)}
                    >
                        <span className="league-name">{league.name}</span>
                        <span className="league-country">{league.country}</span>
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Đang tải bảng xếp hạng...</p>
                </div>
            ) : (
                <div className="standings-table-container">
                    <div className="standings-table">
                        <div className="table-header">
                            <div className="header-cell position">#</div>
                            <div className="header-cell team">Đội bóng</div>
                            <div className="header-cell stats">P</div>
                            <div className="header-cell stats">W</div>
                            <div className="header-cell stats">D</div>
                            <div className="header-cell stats">L</div>
                            <div className="header-cell stats">GF</div>
                            <div className="header-cell stats">GA</div>
                            <div className="header-cell stats">GD</div>
                            <div className="header-cell points">Pts</div>
                            <div className="header-cell form">Form</div>
                        </div>

                        {standings.map((team, index) => (
                            <div key={index} className={`table-row ${getPositionClass(team.position)}`}>
                                <div className="cell position">
                                    {team.position === 1 && <FaTrophy className="trophy" />}
                                    {team.position}
                                </div>
                                <div className="cell team">
                                    <div className="team-info">
                                        <div className="team-name">{team.team}</div>
                                        <div className="team-position-change">
                                            {team.position < 5 && <FaArrowUp className="arrow-up" />}
                                            {team.position > 15 && <FaArrowDown className="arrow-down" />}
                                            {team.position >= 5 && team.position <= 15 && <FaMinus className="arrow-stable" />}
                                        </div>
                                    </div>
                                </div>
                                <div className="cell stats">{team.played}</div>
                                <div className="cell stats">{team.won}</div>
                                <div className="cell stats">{team.drawn}</div>
                                <div className="cell stats">{team.lost}</div>
                                <div className="cell stats">{team.goalsFor}</div>
                                <div className="cell stats">{team.goalsAgainst}</div>
                                <div className="cell stats">{team.goalsFor - team.goalsAgainst}</div>
                                <div className="cell points">{team.points}</div>
                                <div className="cell form">
                                    <div className="form-indicators">
                                        {team.form.split('').map((result, i) => (
                                            <div
                                                key={i}
                                                className="form-indicator"
                                                style={{ backgroundColor: getFormColor(result) }}
                                            >
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="standings-legend">
                        <div className="legend-item">
                            <div className="legend-color champions-league"></div>
                            <span>Champions League</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color europa-league"></div>
                            <span>Europa League</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color relegation"></div>
                            <span>Xuống hạng</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="standings-footer">
                <div className="quick-links">
                    <h3>Liên kết nhanh</h3>
                    <div className="links-grid">
                        <Link to="/matches" className="quick-link">
                            <div className="link-icon">⚽</div>
                            <div className="link-text">
                                <h4>Trận đấu</h4>
                                <p>Xem lịch thi đấu và kết quả</p>
                            </div>
                        </Link>
                        <Link to="/news" className="quick-link">
                            <div className="link-icon">📰</div>
                            <div className="link-text">
                                <h4>Tin tức</h4>
                                <p>Cập nhật tin tức mới nhất</p>
                            </div>
                        </Link>
                        <Link to="/search" className="quick-link">
                            <div className="link-icon">🔍</div>
                            <div className="link-text">
                                <h4>Tìm kiếm</h4>
                                <p>Tìm kiếm thông tin đội bóng</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Standings; 