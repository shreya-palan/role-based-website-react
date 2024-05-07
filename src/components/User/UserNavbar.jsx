import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li>
          <Link to="/user" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/viewItem" className="nav-link">
            View Items
          </Link>
        </li>
        <li>
          <Link to="/viewCategory" className="nav-link">
            View Category
          </Link>
        </li>
        
        <li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default UserNavbar
