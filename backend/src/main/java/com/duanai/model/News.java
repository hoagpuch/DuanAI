package com.duanai.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "news")
public class News {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    @Column(nullable = false)
    private String category;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @Column(name = "source_url")
    private String sourceUrl;
    
    @Column(name = "published_date")
    private LocalDateTime publishedDate;
    
    @Column(name = "is_featured")
    private boolean isFeatured = false;
    
    @Column(name = "view_count")
    private int viewCount = 0;
    
    @Column(name = "author")
    private String author;
    
    @Column(name = "tags")
    private String tags;
    
    // Constructors
    public News() {}
    
    public News(String title, String content, String category) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.publishedDate = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }
    
    public String getImageUrl() {
        return imageUrl;
    }
    
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    
    public String getSourceUrl() {
        return sourceUrl;
    }
    
    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }
    
    public LocalDateTime getPublishedDate() {
        return publishedDate;
    }
    
    public void setPublishedDate(LocalDateTime publishedDate) {
        this.publishedDate = publishedDate;
    }
    
    public boolean isFeatured() {
        return isFeatured;
    }
    
    public void setFeatured(boolean featured) {
        isFeatured = featured;
    }
    
    public int getViewCount() {
        return viewCount;
    }
    
    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }
    
    public String getAuthor() {
        return author;
    }
    
    public void setAuthor(String author) {
        this.author = author;
    }
    
    public String getTags() {
        return tags;
    }
    
    public void setTags(String tags) {
        this.tags = tags;
    }
} 