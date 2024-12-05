
import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
// import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRoute from './components/ProtectedRoute'; // Correct import
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}

        <Route
          path="/dashboard"
          element={
          <ProtectedRoute>
            <DashboardPage />
            </ProtectedRoute>
            }
        />
      </Routes>
    </Router>
  );
};

export default App;
