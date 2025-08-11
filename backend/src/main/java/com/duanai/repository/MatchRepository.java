package com.duanai.repository;

import com.duanai.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
    
    List<Match> findByCompetitionOrderByMatchDateDesc(String competition);
    
    List<Match> findByMatchStatusOrderByMatchDateDesc(String matchStatus);
    
    List<Match> findByHomeTeamOrAwayTeamOrderByMatchDateDesc(String homeTeam, String awayTeam);
    
    @Query("SELECT m FROM Match m WHERE m.matchDate >= :startDate ORDER BY m.matchDate ASC")
    List<Match> findUpcomingMatches(@Param("startDate") LocalDateTime startDate);
    
    @Query("SELECT m FROM Match m WHERE m.matchDate < :endDate ORDER BY m.matchDate DESC")
    List<Match> findRecentMatches(@Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT m FROM Match m WHERE m.matchStatus = 'LIVE' ORDER BY m.matchDate DESC")
    List<Match> findLiveMatches();
    
    List<Match> findByHomeTeamContainingIgnoreCaseOrAwayTeamContainingIgnoreCase(String homeTeam, String awayTeam);
} 