import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useUser } from './UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { setAdmin, setUser } = useUser();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(''); // Initialize with an empty string

  const handleSubmit = (e) => {
    e.preventDefault();

    const initialadminDetails = { id: '1', username: 'admin', email: 'admin@gmail.com' };
    const userDetails = { id: '2'};

    // Check if entered username and email match admin or user details
    if (username === initialadminDetails.username && email === initialadminDetails.email)
         {
      // Set user type based on ID and Redirect
        setAdmin();
        setId(initialadminDetails.id); // Set ID for admin
        navigate('/admin');
        localStorage.setItem('username', username);
        return
    }
    const adminsFromStorage = JSON.parse(localStorage.getItem('admins')) || [];
    const isAdmin = adminsFromStorage.find((admin) => admin.username === username && admin.email === email);
    if(isAdmin){
      setAdmin();
      setId(isAdmin.id); // Set ID for admin
      navigate('/admin');
      localStorage.setItem('username', username);
    }
    else {
        setUser();
        setId(userDetails.id); // Set ID for user
        navigate('/user');
        localStorage.setItem('username', username);
      } 
  };

  return (
    <div>
      <h2><u>LOGIN</u></h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;