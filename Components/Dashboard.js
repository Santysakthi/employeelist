
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';  

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button className="dashboard-button" onClick={() => navigate('/employees')}>Show Employees</button>
      <button className="dashboard-button" onClick={() => navigate('/add-employee')}>Add New Employee</button>
      <button className="dashboard-button logout-button" onClick={() => navigate('/')}>Log-Out</button>
    </div>
  );
}

export default Dashboard;
