package com.duanai.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "matches")
public class Match {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String homeTeam;
    
    @Column(nullable = false)
    private String awayTeam;
    
    @Column(name = "home_score")
    private Integer homeScore;
    
    @Column(name = "away_score")
    private Integer awayScore;
    
    @Column(name = "match_date")
    private LocalDateTime matchDate;
    
    @Column(nullable = false)
    private String competition;
    
    @Column(name = "match_status")
    private String matchStatus; // SCHEDULED, LIVE, FINISHED, CANCELLED
    
    @Column(name = "stadium")
    private String stadium;
    
    @Column(name = "referee")
    private String referee;
    
    @Column(name = "attendance")
    private Integer attendance;
    
    @Column(name = "highlights_url")
    private String highlightsUrl;
    
    @Column(name = "match_report")
    private String matchReport;
    
    // Constructors
    public Match() {}
    
    public Match(String homeTeam, String awayTeam, String competition) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.competition = competition;
        this.matchStatus = "SCHEDULED";
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getHomeTeam() {
        return homeTeam;
    }
    
    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }
    
    public String getAwayTeam() {
        return awayTeam;
    }
    
    public void setAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
    }
    
    public Integer getHomeScore() {
        return homeScore;
    }
    
    public void setHomeScore(Integer homeScore) {
        this.homeScore = homeScore;
    }
    
    public Integer getAwayScore() {
        return awayScore;
    }
    
    public void setAwayScore(Integer awayScore) {
        this.awayScore = awayScore;
    }
    
    public LocalDateTime getMatchDate() {
        return matchDate;
    }
    
    public void setMatchDate(LocalDateTime matchDate) {
        this.matchDate = matchDate;
    }
    
    public String getCompetition() {
        return competition;
    }
    
    public void setCompetition(String competition) {
        this.competition = competition;
    }
    
    public String getMatchStatus() {
        return matchStatus;
    }
    
    public void setMatchStatus(String matchStatus) {
        this.matchStatus = matchStatus;
    }
    
    public String getStadium() {
        return stadium;
    }
    
    public void setStadium(String stadium) {
        this.stadium = stadium;
    }
    
    public String getReferee() {
        return referee;
    }
    
    public void setReferee(String referee) {
        this.referee = referee;
    }
    
    public Integer getAttendance() {
        return attendance;
    }
    
    public void setAttendance(Integer attendance) {
        this.attendance = attendance;
    }
    
    public String getHighlightsUrl() {
        return highlightsUrl;
    }
    
    public void setHighlightsUrl(String highlightsUrl) {
        this.highlightsUrl = highlightsUrl;
    }
    
    public String getMatchReport() {
        return matchReport;
    }
    
    public void setMatchReport(String matchReport) {
        this.matchReport = matchReport;
    }
} 