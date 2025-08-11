package com.duanai.repository;

import com.duanai.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    
    List<News> findByCategoryOrderByPublishedDateDesc(String category);
    
    List<News> findByIsFeaturedTrueOrderByPublishedDateDesc();
    
    List<News> findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(String title, String content);
    
    @Query("SELECT n FROM News n WHERE n.publishedDate >= :startDate ORDER BY n.publishedDate DESC")
    List<News> findRecentNews(@Param("startDate") java.time.LocalDateTime startDate);
    
    @Query("SELECT n FROM News n WHERE n.viewCount > 0 ORDER BY n.viewCount DESC")
    List<News> findMostViewedNews();
    
    List<News> findByTagsContainingIgnoreCaseOrderByPublishedDateDesc(String tag);
} 