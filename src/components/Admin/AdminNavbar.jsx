import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };
  
  return (
      <nav className="navbar">
      <ul className="nav-list">
      <li>
          <span className="nav-title" style={{ color: 'white' }}>Hello {username}</span>
        </li>
      <li>
          <Link to="/admin" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/addAdmin" className="nav-link">
            Add Admin
          </Link>
        </li>
        <li>
          <Link to="/addCategory" className="nav-link">
            View Admin
          </Link>
        </li>
        <li>
          <Link to="/editItem" className="nav-link">
            Edit Items
          </Link>
        </li>
        <li>
          <Link to="/editCategory" className="nav-link">
            Edit Category
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

export default AdminNavbar
