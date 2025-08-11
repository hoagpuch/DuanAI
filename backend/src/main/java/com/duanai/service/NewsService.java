package com.duanai.service;

import com.duanai.model.News;
import com.duanai.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NewsService {
    
    @Autowired
    private NewsRepository newsRepository;
    
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }
    
    public Optional<News> getNewsById(Long id) {
        Optional<News> news = newsRepository.findById(id);
        if (news.isPresent()) {
            News newsItem = news.get();
            newsItem.setViewCount(newsItem.getViewCount() + 1);
            newsRepository.save(newsItem);
        }
        return news;
    }
    
    public List<News> getNewsByCategory(String category) {
        return newsRepository.findByCategoryOrderByPublishedDateDesc(category);
    }
    
    public List<News> getFeaturedNews() {
        return newsRepository.findByIsFeaturedTrueOrderByPublishedDateDesc();
    }
    
    public List<News> searchNews(String keyword) {
        return newsRepository.findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(keyword, keyword);
    }
    
    public List<News> getRecentNews() {
        LocalDateTime startDate = LocalDateTime.now().minusDays(7);
        return newsRepository.findRecentNews(startDate);
    }
    
    public List<News> getMostViewedNews() {
        return newsRepository.findMostViewedNews();
    }
    
    public List<News> getNewsByTag(String tag) {
        return newsRepository.findByTagsContainingIgnoreCaseOrderByPublishedDateDesc(tag);
    }
    
    public News createNews(News news) {
        news.setPublishedDate(LocalDateTime.now());
        return newsRepository.save(news);
    }
    
    public News updateNews(Long id, News newsDetails) {
        Optional<News> news = newsRepository.findById(id);
        if (news.isPresent()) {
            News existingNews = news.get();
            existingNews.setTitle(newsDetails.getTitle());
            existingNews.setContent(newsDetails.getContent());
            existingNews.setCategory(newsDetails.getCategory());
            existingNews.setImageUrl(newsDetails.getImageUrl());
            existingNews.setSourceUrl(newsDetails.getSourceUrl());
            existingNews.setFeatured(newsDetails.isFeatured());
            existingNews.setAuthor(newsDetails.getAuthor());
            existingNews.setTags(newsDetails.getTags());
            return newsRepository.save(existingNews);
        }
        return null;
    }
    
    public boolean deleteNews(Long id) {
        if (newsRepository.existsById(id)) {
            newsRepository.deleteById(id);
            return true;
        }
        return false;
    }
} 