import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUsers, FaTrophy, FaCalendar, FaChartLine, FaNewspaper, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './TeamProfile.css';

const TeamProfile = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [loading, setLoading] = useState(true);

    // Mock team data
    const mockTeams = {
        'manchester-city': {
            id: 'manchester-city',
            name: 'Manchester City',
            shortName: 'Man City',
            league: 'Premier League',
            country: 'England',
            founded: 1880,
            stadium: 'Etihad Stadium',
            capacity: 55097,
            manager: 'Pep Guardiola',
            owner: 'City Football Group',
            website: 'https://www.mancity.com',
            logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
            colors: ['#6CABDD', '#FFFFFF'],
            trophies: {
                premierLeague: 9,
                faCup: 7,
                leagueCup: 8,
                championsLeague: 1,
                uefaCup: 1
            },
            squad: [
                { number: 31, name: 'Ederson', position: 'GK', nationality: 'Brazil', age: 30, joined: 2017 },
                { number: 2, name: 'Kyle Walker', position: 'DF', nationality: 'England', age: 33, joined: 2017 },
                { number: 3, name: 'Rúben Dias', position: 'DF', nationality: 'Portugal', age: 26, joined: 2020 },
                { number: 4, name: 'John Stones', position: 'DF', nationality: 'England', age: 29, joined: 2016 },
                { number: 5, name: 'Rodri', position: 'MF', nationality: 'Spain', age: 27, joined: 2019 },
                { number: 17, name: 'Kevin De Bruyne', position: 'MF', nationality: 'Belgium', age: 32, joined: 2015 },
                { number: 9, name: 'Erling Haaland', position: 'FW', nationality: 'Norway', age: 23, joined: 2022 },
                { number: 47, name: 'Phil Foden', position: 'MF', nationality: 'England', age: 23, joined: 2017 }
            ],
            recentMatches: [
                { opponent: 'Arsenal', result: 'W 3-1', date: '2024-01-15', competition: 'Premier League' },
                { opponent: 'Liverpool', result: 'D 1-1', date: '2024-01-08', competition: 'Premier League' },
                { opponent: 'Chelsea', result: 'W 2-0', date: '2024-01-01', competition: 'Premier League' },
                { opponent: 'Bayern Munich', result: 'W 2-1', date: '2023-12-25', competition: 'Champions League' }
            ],
            stats: {
                position: 2,
                played: 38,
                won: 27,
                drawn: 7,
                lost: 4,
                goalsFor: 91,
                goalsAgainst: 33,
                points: 88
            }
        },
        'real-madrid': {
            id: 'real-madrid',
            name: 'Real Madrid',
            shortName: 'Real Madrid',
            league: 'La Liga',
            country: 'Spain',
            founded: 1902,
            stadium: 'Santiago Bernabéu',
            capacity: 81044,
            manager: 'Carlo Ancelotti',
            owner: 'Sociedad Anónima Deportiva',
            website: 'https://www.realmadrid.com',
            logo: 'https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=400',
            colors: ['#FFFFFF', '#FDB913'],
            trophies: {
                laLiga: 36,
                copaDelRey: 20,
                championsLeague: 14,
                uefaCup: 2
            },
            squad: [
                { number: 1, name: 'Thibaut Courtois', position: 'GK', nationality: 'Belgium', age: 31, joined: 2018 },
                { number: 2, name: 'Dani Carvajal', position: 'DF', nationality: 'Spain', age: 31, joined: 2013 },
                { number: 4, name: 'David Alaba', position: 'DF', nationality: 'Austria', age: 31, joined: 2021 },
                { number: 5, name: 'Jude Bellingham', position: 'MF', nationality: 'England', age: 20, joined: 2023 },
                { number: 7, name: 'Vinícius Júnior', position: 'FW', nationality: 'Brazil', age: 23, joined: 2018 },
                { number: 9, name: 'Kylian Mbappé', position: 'FW', nationality: 'France', age: 25, joined: 2024 },
                { number: 10, name: 'Luka Modrić', position: 'MF', nationality: 'Croatia', age: 38, joined: 2012 },
                { number: 15, name: 'Federico Valverde', position: 'MF', nationality: 'Uruguay', age: 25, joined: 2016 }
            ],
            recentMatches: [
                { opponent: 'Barcelona', result: 'W 3-0', date: '2024-01-14', competition: 'La Liga' },
                { opponent: 'Atlético Madrid', result: 'W 2-1', date: '2024-01-07', competition: 'La Liga' },
                { opponent: 'Girona', result: 'D 1-1', date: '2024-01-01', competition: 'La Liga' },
                { opponent: 'PSG', result: 'W 2-0', date: '2023-12-24', competition: 'Champions League' }
            ],
            stats: {
                position: 1,
                played: 38,
                won: 29,
                drawn: 6,
                lost: 3,
                goalsFor: 87,
                goalsAgainst: 26,
                points: 93
            }
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const teamData = mockTeams[teamId];
            setTeam(teamData);
            setLoading(false);
        }, 500);
    }, [teamId]);

    if (loading) {
        return (
            <div className="team-profile-container">
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Đang tải thông tin đội bóng...</p>
                </div>
            </div>
        );
    }

    if (!team) {
        return (
            <div className="team-profile-container">
                <div className="error">
                    <h2>Không tìm thấy đội bóng</h2>
                    <p>Đội bóng bạn đang tìm kiếm không tồn tại.</p>
                    <Link to="/" className="back-btn">Quay về trang chủ</Link>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', name: 'Tổng quan', icon: <FaUsers /> },
        { id: 'squad', name: 'Đội hình', icon: <FaUsers /> },
        { id: 'matches', name: 'Trận đấu', icon: <FaCalendar /> },
        { id: 'stats', name: 'Thống kê', icon: <FaChartLine /> },
        { id: 'news', name: 'Tin tức', icon: <FaNewspaper /> }
    ];

    const renderOverview = () => (
        <div className="overview-content">
            <div className="team-info-grid">
                <div className="info-card">
                    <div className="info-icon">
                        <FaMapMarkerAlt />
                    </div>
                    <div className="info-content">
                        <h4>Sân vận động</h4>
                        <p>{team.stadium}</p>
                        <small>Sức chứa: {team.capacity.toLocaleString()} chỗ ngồi</small>
                    </div>
                </div>
                <div className="info-card">
                    <div className="info-icon">
                        <FaUsers />
                    </div>
                    <div className="info-content">
                        <h4>Huấn luyện viên</h4>
                        <p>{team.manager}</p>
                        <small>Chủ sở hữu: {team.owner}</small>
                    </div>
                </div>
                <div className="info-card">
                    <div className="info-icon">
                        <FaTrophy />
                    </div>
                    <div className="info-content">
                        <h4>Danh hiệu</h4>
                        <p>{Object.values(team.trophies).reduce((a, b) => a + b, 0)} danh hiệu</p>
                        <small>Thành lập: {team.founded}</small>
                    </div>
                </div>
            </div>

            <div className="trophies-section">
                <h3>Danh hiệu chính</h3>
                <div className="trophies-grid">
                    {Object.entries(team.trophies).map(([trophy, count]) => (
                        <div key={trophy} className="trophy-item">
                            <div className="trophy-icon">🏆</div>
                            <div className="trophy-info">
                                <h4>{trophy.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                <p>{count} lần</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="season-stats">
                <h3>Thống kê mùa giải</h3>
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-value">{team.stats.position}</div>
                        <div className="stat-label">Vị trí</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{team.stats.points}</div>
                        <div className="stat-label">Điểm</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{team.stats.won}</div>
                        <div className="stat-label">Thắng</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{team.stats.drawn}</div>
                        <div className="stat-label">Hòa</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{team.stats.lost}</div>
                        <div className="stat-label">Thua</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{team.stats.goalsFor}</div>
                        <div className="stat-label">Bàn thắng</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSquad = () => (
        <div className="squad-content">
            <div className="squad-filters">
                <button className="filter-btn active">Tất cả</button>
                <button className="filter-btn">Thủ môn</button>
                <button className="filter-btn">Hậu vệ</button>
                <button className="filter-btn">Tiền vệ</button>
                <button className="filter-btn">Tiền đạo</button>
            </div>
            <div className="squad-grid">
                {team.squad.map((player, index) => (
                    <div key={index} className="player-card">
                        <div className="player-number">{player.number}</div>
                        <div className="player-info">
                            <h4>{player.name}</h4>
                            <p className="player-position">{player.position}</p>
                            <p className="player-nationality">{player.nationality}</p>
                            <p className="player-age">{player.age} tuổi</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderMatches = () => (
        <div className="matches-content">
            <div className="matches-list">
                {team.recentMatches.map((match, index) => (
                    <div key={index} className="match-item">
                        <div className="match-date">{match.date}</div>
                        <div className="match-info">
                            <div className="match-teams">
                                <span className="team-name">{team.shortName}</span>
                                <span className="match-result">{match.result}</span>
                                <span className="opponent-name">{match.opponent}</span>
                            </div>
                            <div className="match-competition">{match.competition}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderStats = () => (
        <div className="stats-content">
            <div className="stats-overview">
                <div className="stat-card">
                    <h4>Bàn thắng</h4>
                    <div className="stat-number">{team.stats.goalsFor}</div>
                    <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${(team.stats.goalsFor / 100) * 100}%` }}></div>
                    </div>
                </div>
                <div className="stat-card">
                    <h4>Bàn thua</h4>
                    <div className="stat-number">{team.stats.goalsAgainst}</div>
                    <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${(team.stats.goalsAgainst / 50) * 100}%` }}></div>
                    </div>
                </div>
                <div className="stat-card">
                    <h4>Hiệu số</h4>
                    <div className="stat-number">{team.stats.goalsFor - team.stats.goalsAgainst}</div>
                    <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${((team.stats.goalsFor - team.stats.goalsAgainst) / 50) * 100}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderNews = () => (
        <div className="news-content">
            <div className="news-list">
                <div className="news-item">
                    <div className="news-image">
                        <img src={team.logo} alt="News" />
                    </div>
                    <div className="news-content">
                        <h4>{team.name} giành chiến thắng quan trọng</h4>
                        <p>Đội bóng đã thể hiện sức mạnh vượt trội trong trận đấu vừa qua...</p>
                        <div className="news-meta">
                            <span className="news-date">2024-01-15</span>
                            <span className="news-category">Tin tức</span>
                        </div>
                    </div>
                </div>
                <div className="news-item">
                    <div className="news-image">
                        <img src={team.logo} alt="News" />
                    </div>
                    <div className="news-content">
                        <h4>Cầu thủ mới gia nhập {team.name}</h4>
                        <p>Đội bóng đã chính thức công bố việc ký hợp đồng với cầu thủ mới...</p>
                        <div className="news-meta">
                            <span className="news-date">2024-01-10</span>
                            <span className="news-category">Chuyển nhượng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return renderOverview();
            case 'squad': return renderSquad();
            case 'matches': return renderMatches();
            case 'stats': return renderStats();
            case 'news': return renderNews();
            default: return renderOverview();
        }
    };

    return (
        <div className="team-profile-container">
            <div className="team-header">
                <div className="team-banner">
                    <div className="team-logo">
                        <img src={team.logo} alt={team.name} />
                    </div>
                    <div className="team-details">
                        <h1>{team.name}</h1>
                        <p className="team-league">{team.league} • {team.country}</p>
                        <div className="team-meta">
                            <span className="team-founded">Thành lập: {team.founded}</span>
                            <span className="team-stadium">{team.stadium}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-name">{tab.name}</span>
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {renderTabContent()}
            </div>

            <div className="team-footer">
                <div className="quick-links">
                    <h3>Liên kết nhanh</h3>
                    <div className="links-grid">
                        <Link to="/standings" className="quick-link">
                            <div className="link-icon">🏆</div>
                            <div className="link-text">
                                <h4>Bảng xếp hạng</h4>
                                <p>Xem vị trí của {team.name}</p>
                            </div>
                        </Link>
                        <Link to="/matches" className="quick-link">
                            <div className="link-icon">⚽</div>
                            <div className="link-text">
                                <h4>Trận đấu</h4>
                                <p>Lịch thi đấu của {team.name}</p>
                            </div>
                        </Link>
                        <Link to="/statistics" className="quick-link">
                            <div className="link-icon">📊</div>
                            <div className="link-text">
                                <h4>Thống kê</h4>
                                <p>Thống kê chi tiết</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamProfile; 