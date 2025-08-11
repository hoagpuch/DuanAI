import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import axios from 'axios';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const url = category ? `/api/news/category/${category}` : '/api/news';
        const response = await axios.get(url);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="news-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            {category ? `Tin tức ${category}` : 'Tin tức bóng đá'}
          </h1>
          <p className="page-subtitle">
            Cập nhật những tin tức bóng đá mới nhất và hot nhất
          </p>
        </div>

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
                  {item.content.substring(0, 150)}...
                </p>
                <div className="news-meta">
                  <span className="news-author">{item.author}</span>
                  <span className="news-date">
                    {new Date(item.publishedDate).toLocaleDateString('vi-VN')}
                  </span>
                  <span className="news-views">
                    <FaEye /> {item.viewCount}
                  </span>
                </div>
                <Link to={`/news/${item.id}`} className="read-more">
                  Đọc thêm <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {news.length === 0 && (
          <div className="no-news">
            <h3>Không có tin tức nào</h3>
            <p>Vui lòng thử lại sau hoặc chọn danh mục khác</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News; 