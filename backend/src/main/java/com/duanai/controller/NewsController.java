package com.duanai.controller;

import com.duanai.model.News;
import com.duanai.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/news")
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {
    
    @Autowired
    private NewsService newsService;
    
    @GetMapping
    public ResponseEntity<List<News>> getAllNews() {
        List<News> news = newsService.getAllNews();
        return ResponseEntity.ok(news);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<News> getNewsById(@PathVariable Long id) {
        Optional<News> news = newsService.getNewsById(id);
        return news.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<News>> getNewsByCategory(@PathVariable String category) {
        List<News> news = newsService.getNewsByCategory(category);
        return ResponseEntity.ok(news);
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<News>> getFeaturedNews() {
        List<News> news = newsService.getFeaturedNews();
        return ResponseEntity.ok(news);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<News>> searchNews(@RequestParam String keyword) {
        List<News> news = newsService.searchNews(keyword);
        return ResponseEntity.ok(news);
    }
    
    @GetMapping("/recent")
    public ResponseEntity<List<News>> getRecentNews() {
        List<News> news = newsService.getRecentNews();
        return ResponseEntity.ok(news);
    }
    
    @GetMapping("/popular")
    public ResponseEntity<List<News>> getMostViewedNews() {
        List<News> news = newsService.getMostViewedNews();
        return ResponseEntity.ok(news);
    }
    
    @GetMapping("/tag/{tag}")
    public ResponseEntity<List<News>> getNewsByTag(@PathVariable String tag) {
        List<News> news = newsService.getNewsByTag(tag);
        return ResponseEntity.ok(news);
    }
    
    @PostMapping
    public ResponseEntity<News> createNews(@RequestBody News news) {
        News createdNews = newsService.createNews(news);
        return ResponseEntity.ok(createdNews);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<News> updateNews(@PathVariable Long id, @RequestBody News newsDetails) {
        News updatedNews = newsService.updateNews(id, newsDetails);
        if (updatedNews != null) {
            return ResponseEntity.ok(updatedNews);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNews(@PathVariable Long id) {
        boolean deleted = newsService.deleteNews(id);
        if (deleted) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
} 