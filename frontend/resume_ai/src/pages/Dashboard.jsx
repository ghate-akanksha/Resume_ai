import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user token from storage
    localStorage.removeItem('token');
    // Send them back to login page
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Resume_AI Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>
      
      <main className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome to your Workspace!</h2>
          <p>Your authentication system is working flawlessly. Now you can start building features like AI resume generation here.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;