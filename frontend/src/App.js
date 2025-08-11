import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Matches from './pages/Matches';
import MatchDetail from './pages/MatchDetail';
import Standings from './pages/Standings';
import Statistics from './pages/Statistics';
import TeamProfile from './pages/TeamProfile';
import Search from './pages/Search';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/matches/:id" element={<MatchDetail />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/team/:teamId" element={<TeamProfile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 