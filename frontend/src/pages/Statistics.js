import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaMedal, FaChartLine, FaUser, FaUsers, FaFutbol } from 'react-icons/fa';
import './Statistics.css';

const Statistics = () => {
    const [selectedCategory, setSelectedCategory] = useState('scorers');
    const [selectedLeague, setSelectedLeague] = useState('Premier League');
    const [loading, setLoading] = useState(true);

    const categories = [
        { id: 'scorers', name: 'Vua phá lưới', icon: '⚽' },
        { id: 'assists', name: 'Kiến tạo', icon: '🎯' },
        { id: 'clean-sheets', name: 'Sạch lưới', icon: '🛡️' },
        { id: 'team-stats', name: 'Thống kê đội bóng', icon: '🏆' }
    ];

    const leagues = [
        { id: 'Premier League', name: 'Premier League', country: 'England' },
        { id: 'La Liga', name: 'La Liga', country: 'Spain' },
        { id: 'Serie A', name: 'Serie A', country: 'Italy' },
        { id: 'Bundesliga', name: 'Bundesliga', country: 'Germany' },
        { id: 'Ligue 1', name: 'Ligue 1', country: 'France' },
        { id: 'V-League', name: 'V-League', country: 'Vietnam' }
    ];

    // Mock statistics data
    const mockStats = {
        scorers: {
            'Premier League': [
                { position: 1, player: 'Erling Haaland', team: 'Manchester City', goals: 27, assists: 5, matches: 31, avg: 0.87 },
                { position: 2, player: 'Mohamed Salah', team: 'Liverpool', goals: 25, assists: 14, matches: 34, avg: 0.74 },
                { position: 3, player: 'Ollie Watkins', team: 'Aston Villa', goals: 19, assists: 13, matches: 37, avg: 0.51 },
                { position: 4, player: 'Alexander Isak', team: 'Newcastle', goals: 17, assists: 1, matches: 27, avg: 0.63 },
                { position: 5, player: 'Dominic Solanke', team: 'Bournemouth', goals: 16, assists: 3, matches: 35, avg: 0.46 }
            ],
            'La Liga': [
                { position: 1, player: 'Artem Dovbyk', team: 'Girona', goals: 24, assists: 8, matches: 36, avg: 0.67 },
                { position: 2, player: 'Jude Bellingham', team: 'Real Madrid', goals: 19, assists: 6, matches: 28, avg: 0.68 },
                { position: 3, player: 'Vinicius Jr', team: 'Real Madrid', goals: 15, assists: 9, matches: 32, avg: 0.47 },
                { position: 4, player: 'Robert Lewandowski', team: 'Barcelona', goals: 14, assists: 8, matches: 35, avg: 0.40 },
                { position: 5, player: 'Antoine Griezmann', team: 'Atlético Madrid', goals: 13, assists: 12, matches: 33, avg: 0.39 }
            ]
        },
        assists: {
            'Premier League': [
                { position: 1, player: 'Kevin De Bruyne', team: 'Manchester City', assists: 18, goals: 4, matches: 18, avg: 1.00 },
                { position: 2, player: 'Mohamed Salah', team: 'Liverpool', assists: 14, goals: 25, matches: 34, avg: 0.41 },
                { position: 3, player: 'Ollie Watkins', team: 'Aston Villa', assists: 13, goals: 19, matches: 37, avg: 0.35 },
                { position: 4, player: 'Bukayo Saka', team: 'Arsenal', assists: 12, goals: 16, matches: 35, avg: 0.34 },
                { position: 5, player: 'Cole Palmer', team: 'Chelsea', assists: 11, goals: 22, matches: 33, avg: 0.33 }
            ],
            'La Liga': [
                { position: 1, player: 'Antoine Griezmann', team: 'Atlético Madrid', assists: 12, goals: 13, matches: 33, avg: 0.36 },
                { position: 2, player: 'Vinicius Jr', team: 'Real Madrid', assists: 9, goals: 15, matches: 32, avg: 0.28 },
                { position: 3, player: 'Artem Dovbyk', team: 'Girona', assists: 8, goals: 24, matches: 36, avg: 0.22 },
                { position: 4, player: 'Robert Lewandowski', team: 'Barcelona', assists: 8, goals: 14, matches: 35, avg: 0.23 },
                { position: 5, player: 'Jude Bellingham', team: 'Real Madrid', assists: 6, goals: 19, matches: 28, avg: 0.21 }
            ]
        },
        'clean-sheets': {
            'Premier League': [
                { position: 1, player: 'David Raya', team: 'Arsenal', cleanSheets: 16, goalsConceded: 29, matches: 34, avg: 0.47 },
                { position: 2, player: 'Ederson', team: 'Manchester City', cleanSheets: 14, goalsConceded: 33, matches: 35, avg: 0.40 },
                { position: 3, player: 'Alisson', team: 'Liverpool', cleanSheets: 13, goalsConceded: 26, matches: 28, avg: 0.46 },
                { position: 4, player: 'Emiliano Martínez', team: 'Aston Villa', cleanSheets: 12, goalsConceded: 61, matches: 37, avg: 0.32 },
                { position: 5, player: 'Nick Pope', team: 'Newcastle', cleanSheets: 11, goalsConceded: 62, matches: 37, avg: 0.30 }
            ],
            'La Liga': [
                { position: 1, player: 'Unai Simón', team: 'Athletic Bilbao', cleanSheets: 18, goalsConceded: 37, matches: 38, avg: 0.47 },
                { position: 2, player: 'Andriy Lunin', team: 'Real Madrid', cleanSheets: 15, goalsConceded: 26, matches: 27, avg: 0.56 },
                { position: 3, player: 'Marc-André ter Stegen', team: 'Barcelona', cleanSheets: 14, goalsConceded: 44, matches: 38, avg: 0.37 },
                { position: 4, player: 'Jan Oblak', team: 'Atlético Madrid', cleanSheets: 13, goalsConceded: 43, matches: 38, avg: 0.34 },
                { position: 5, player: 'Álex Remiro', team: 'Real Sociedad', cleanSheets: 12, goalsConceded: 39, matches: 38, avg: 0.32 }
            ]
        },
        'team-stats': {
            'Premier League': [
                { position: 1, team: 'Manchester City', goalsFor: 91, goalsAgainst: 33, goalDifference: 58, points: 88, wins: 27, draws: 7, losses: 4 },
                { position: 2, team: 'Liverpool', goalsFor: 85, goalsAgainst: 26, goalDifference: 59, points: 92, wins: 28, draws: 8, losses: 2 },
                { position: 3, team: 'Arsenal', goalsFor: 75, goalsAgainst: 29, goalDifference: 46, points: 83, wins: 25, draws: 8, losses: 5 },
                { position: 4, team: 'Aston Villa', goalsFor: 76, goalsAgainst: 61, goalDifference: 15, points: 68, wins: 20, draws: 8, losses: 10 },
                { position: 5, team: 'Tottenham', goalsFor: 74, goalsAgainst: 61, goalDifference: 13, points: 66, wins: 20, draws: 6, losses: 12 }
            ],
            'La Liga': [
                { position: 1, team: 'Real Madrid', goalsFor: 87, goalsAgainst: 26, goalDifference: 61, points: 93, wins: 29, draws: 6, losses: 3 },
                { position: 2, team: 'Barcelona', goalsFor: 79, goalsAgainst: 44, goalDifference: 35, points: 82, wins: 25, draws: 7, losses: 6 },
                { position: 3, team: 'Girona', goalsFor: 85, goalsAgainst: 46, goalDifference: 39, points: 81, wins: 25, draws: 6, losses: 7 },
                { position: 4, team: 'Atlético Madrid', goalsFor: 70, goalsAgainst: 43, goalDifference: 27, points: 76, wins: 24, draws: 4, losses: 10 },
                { position: 5, team: 'Athletic Bilbao', goalsFor: 61, goalsAgainst: 37, goalDifference: 24, points: 68, wins: 19, draws: 11, losses: 8 }
            ]
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [selectedCategory, selectedLeague]);

    const getMedalIcon = (position) => {
        switch (position) {
            case 1: return <FaTrophy className="gold" />;
            case 2: return <FaMedal className="silver" />;
            case 3: return <FaMedal className="bronze" />;
            default: return null;
        }
    };

    const renderStatsTable = () => {
        const stats = mockStats[selectedCategory]?.[selectedLeague] || [];
        
        if (selectedCategory === 'team-stats') {
            return (
                <div className="stats-table team-stats">
                    <div className="table-header">
                        <div className="header-cell position">#</div>
                        <div className="header-cell team">Đội bóng</div>
                        <div className="header-cell stats">GF</div>
                        <div className="header-cell stats">GA</div>
                        <div className="header-cell stats">GD</div>
                        <div className="header-cell stats">W</div>
                        <div className="header-cell stats">D</div>
                        <div className="header-cell stats">L</div>
                        <div className="header-cell points">Pts</div>
                    </div>
                    {stats.map((team, index) => (
                        <div key={index} className="table-row">
                            <div className="cell position">
                                {getMedalIcon(team.position)}
                                {team.position}
                            </div>
                            <div className="cell team">{team.team}</div>
                            <div className="cell stats">{team.goalsFor}</div>
                            <div className="cell stats">{team.goalsAgainst}</div>
                            <div className="cell stats">{team.goalDifference}</div>
                            <div className="cell stats">{team.wins}</div>
                            <div className="cell stats">{team.draws}</div>
                            <div className="cell stats">{team.losses}</div>
                            <div className="cell points">{team.points}</div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className="stats-table player-stats">
                <div className="table-header">
                    <div className="header-cell position">#</div>
                    <div className="header-cell player">Cầu thủ</div>
                    <div className="header-cell team">Đội bóng</div>
                    <div className="header-cell stats">
                        {selectedCategory === 'scorers' ? 'Bàn thắng' : 
                         selectedCategory === 'assists' ? 'Kiến tạo' : 'Sạch lưới'}
                    </div>
                    <div className="header-cell stats">
                        {selectedCategory === 'scorers' ? 'Kiến tạo' : 
                         selectedCategory === 'assists' ? 'Bàn thắng' : 'Bàn thua'}
                    </div>
                    <div className="header-cell stats">Trận</div>
                    <div className="header-cell stats">TB/Trận</div>
                </div>
                {stats.map((player, index) => (
                    <div key={index} className="table-row">
                        <div className="cell position">
                            {getMedalIcon(player.position)}
                            {player.position}
                        </div>
                        <div className="cell player">{player.player}</div>
                        <div className="cell team">{player.team}</div>
                        <div className="cell stats main-stat">
                            {selectedCategory === 'scorers' ? player.goals : 
                             selectedCategory === 'assists' ? player.assists : player.cleanSheets}
                        </div>
                        <div className="cell stats secondary-stat">
                            {selectedCategory === 'scorers' ? player.assists : 
                             selectedCategory === 'assists' ? player.goals : player.goalsConceded}
                        </div>
                        <div className="cell stats">{player.matches}</div>
                        <div className="cell stats">{player.avg}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="statistics-container">
            <div className="statistics-header">
                <h1>Thống kê</h1>
                <p>Xem thống kê chi tiết về cầu thủ và đội bóng</p>
            </div>

            <div className="category-selector">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-name">{category.name}</span>
                    </button>
                ))}
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
                    <p>Đang tải thống kê...</p>
                </div>
            ) : (
                <div className="stats-container">
                    <div className="stats-table-container">
                        {renderStatsTable()}
                    </div>

                    <div className="stats-summary">
                        <div className="summary-card">
                            <div className="summary-icon">
                                <FaFutbol />
                            </div>
                            <div className="summary-content">
                                <h3>Bàn thắng nhiều nhất</h3>
                                <p className="summary-value">27</p>
                                <p className="summary-label">Erling Haaland</p>
                            </div>
                        </div>
                        <div className="summary-card">
                            <div className="summary-icon">
                                <FaUser />
                            </div>
                            <div className="summary-content">
                                <h3>Kiến tạo nhiều nhất</h3>
                                <p className="summary-value">18</p>
                                <p className="summary-label">Kevin De Bruyne</p>
                            </div>
                        </div>
                        <div className="summary-card">
                            <div className="summary-icon">
                                <FaUsers />
                            </div>
                            <div className="summary-content">
                                <h3>Đội bóng xuất sắc</h3>
                                <p className="summary-value">93</p>
                                <p className="summary-label">Real Madrid</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="statistics-footer">
                <div className="quick-links">
                    <h3>Liên kết nhanh</h3>
                    <div className="links-grid">
                        <Link to="/standings" className="quick-link">
                            <div className="link-icon">🏆</div>
                            <div className="link-text">
                                <h4>Bảng xếp hạng</h4>
                                <p>Xem bảng xếp hạng các giải đấu</p>
                            </div>
                        </Link>
                        <Link to="/matches" className="quick-link">
                            <div className="link-icon">⚽</div>
                            <div className="link-text">
                                <h4>Trận đấu</h4>
                                <p>Lịch thi đấu và kết quả</p>
                            </div>
                        </Link>
                        <Link to="/news" className="quick-link">
                            <div className="link-icon">📰</div>
                            <div className="link-text">
                                <h4>Tin tức</h4>
                                <p>Tin tức bóng đá mới nhất</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics; 