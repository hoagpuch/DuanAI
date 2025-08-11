package com.duanai.controller;

import com.duanai.model.Match;
import com.duanai.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/matches")
@CrossOrigin(origins = "http://localhost:3000")
public class MatchController {
    
    @Autowired
    private MatchService matchService;
    
    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        List<Match> matches = matchService.getAllMatches();
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Match> getMatchById(@PathVariable Long id) {
        Optional<Match> match = matchService.getMatchById(id);
        return match.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/competition/{competition}")
    public ResponseEntity<List<Match>> getMatchesByCompetition(@PathVariable String competition) {
        List<Match> matches = matchService.getMatchesByCompetition(competition);
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Match>> getMatchesByStatus(@PathVariable String status) {
        List<Match> matches = matchService.getMatchesByStatus(status);
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/upcoming")
    public ResponseEntity<List<Match>> getUpcomingMatches() {
        List<Match> matches = matchService.getUpcomingMatches();
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/recent")
    public ResponseEntity<List<Match>> getRecentMatches() {
        List<Match> matches = matchService.getRecentMatches();
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches() {
        List<Match> matches = matchService.getLiveMatches();
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/team/{teamName}")
    public ResponseEntity<List<Match>> getMatchesByTeam(@PathVariable String teamName) {
        List<Match> matches = matchService.getMatchesByTeam(teamName);
        return ResponseEntity.ok(matches);
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Match>> searchMatchesByTeam(@RequestParam String teamName) {
        List<Match> matches = matchService.searchMatchesByTeam(teamName);
        return ResponseEntity.ok(matches);
    }
    
    @PostMapping
    public ResponseEntity<Match> createMatch(@RequestBody Match match) {
        Match createdMatch = matchService.createMatch(match);
        return ResponseEntity.ok(createdMatch);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Match> updateMatch(@PathVariable Long id, @RequestBody Match matchDetails) {
        Match updatedMatch = matchService.updateMatch(id, matchDetails);
        if (updatedMatch != null) {
            return ResponseEntity.ok(updatedMatch);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMatch(@PathVariable Long id) {
        boolean deleted = matchService.deleteMatch(id);
        if (deleted) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
} 