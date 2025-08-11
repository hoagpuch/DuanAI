package com.duanai.service;

import com.duanai.model.Match;
import com.duanai.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MatchService {
    
    @Autowired
    private MatchRepository matchRepository;
    
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }
    
    public Optional<Match> getMatchById(Long id) {
        return matchRepository.findById(id);
    }
    
    public List<Match> getMatchesByCompetition(String competition) {
        return matchRepository.findByCompetitionOrderByMatchDateDesc(competition);
    }
    
    public List<Match> getMatchesByStatus(String status) {
        return matchRepository.findByMatchStatusOrderByMatchDateDesc(status);
    }
    
    public List<Match> getUpcomingMatches() {
        return matchRepository.findUpcomingMatches(LocalDateTime.now());
    }
    
    public List<Match> getRecentMatches() {
        return matchRepository.findRecentMatches(LocalDateTime.now());
    }
    
    public List<Match> getLiveMatches() {
        return matchRepository.findLiveMatches();
    }
    
    public List<Match> searchMatchesByTeam(String teamName) {
        return matchRepository.findByHomeTeamContainingIgnoreCaseOrAwayTeamContainingIgnoreCase(teamName, teamName);
    }
    
    public List<Match> getMatchesByTeam(String teamName) {
        return matchRepository.findByHomeTeamOrAwayTeamOrderByMatchDateDesc(teamName, teamName);
    }
    
    public Match createMatch(Match match) {
        return matchRepository.save(match);
    }
    
    public Match updateMatch(Long id, Match matchDetails) {
        Optional<Match> match = matchRepository.findById(id);
        if (match.isPresent()) {
            Match existingMatch = match.get();
            existingMatch.setHomeTeam(matchDetails.getHomeTeam());
            existingMatch.setAwayTeam(matchDetails.getAwayTeam());
            existingMatch.setHomeScore(matchDetails.getHomeScore());
            existingMatch.setAwayScore(matchDetails.getAwayScore());
            existingMatch.setMatchDate(matchDetails.getMatchDate());
            existingMatch.setCompetition(matchDetails.getCompetition());
            existingMatch.setMatchStatus(matchDetails.getMatchStatus());
            existingMatch.setStadium(matchDetails.getStadium());
            existingMatch.setReferee(matchDetails.getReferee());
            existingMatch.setAttendance(matchDetails.getAttendance());
            existingMatch.setHighlightsUrl(matchDetails.getHighlightsUrl());
            existingMatch.setMatchReport(matchDetails.getMatchReport());
            return matchRepository.save(existingMatch);
        }
        return null;
    }
    
    public boolean deleteMatch(Long id) {
        if (matchRepository.existsById(id)) {
            matchRepository.deleteById(id);
            return true;
        }
        return false;
    }
} 