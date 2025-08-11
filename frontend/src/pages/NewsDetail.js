import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaCalendar, FaUser } from 'react-icons/fa';
import axios from 'axios';
import './NewsDetail.css';

const NewsDetail = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="error-message">
        Không tìm thấy tin tức
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <div className="container">
        <Link to="/news" className="back-link">
          <FaArrowLeft /> Quay lại danh sách tin tức
        </Link>

        <article className="news-article">
          <header className="article-header">
            <div className="article-category">{news.category}</div>
            <h1 className="article-title">{news.title}</h1>
            <div className="article-meta">
              <span className="meta-item">
                <FaUser /> {news.author}
              </span>
              <span className="meta-item">
                <FaCalendar /> {new Date(news.publishedDate).toLocaleDateString('vi-VN')}
              </span>
              <span className="meta-item">
                <FaEye /> {news.viewCount} lượt xem
              </span>
            </div>
          </header>

          {news.imageUrl && (
            <div className="article-image">
              <img src={news.imageUrl} alt={news.title} />
            </div>
          )}

          <div className="article-content">
            <p>{news.content}</p>
          </div>

          {news.tags && (
            <div className="article-tags">
              <h4>Tags:</h4>
              <div className="tags">
                {news.tags.split(',').map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {news.sourceUrl && (
            <div className="article-source">
              <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                Xem nguồn gốc
              </a>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default NewsDetail; 