import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

// Наши классы-страницы
import DashboardPage from './pages/DashboardPage';
import MarketPage from './pages/MarketPage';
import LogisticsPage from './pages/LogisticsPage';
import CarsPage from './pages/CarsPage';
import NewsPage from './pages/NewsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContestsPage from './pages/ContestsPage';

import './App.css'; // Если у вас есть общий файл со стилями

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex' }}>
        {/* Сайдбар слева */}
        <Sidebar />

        {/* Основная часть справа */}
        <div style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            {/* При заходе на "/", будем показывать Dashboard */}
            <Route path="/" element={<DashboardPage />} />

            {/* Другие маршруты */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contests" element={<ContestsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
