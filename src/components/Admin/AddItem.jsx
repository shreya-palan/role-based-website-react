import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { useUser } from '../UserContext';

const AddItem = () => {

  const {setAdmin} = useUser();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleAddAdmin = () => {
    const existingAdmins = JSON.parse(localStorage.getItem('admins')) || [];
    const maxId = existingAdmins.reduce((max, admin) => Math.max(max, admin.id), 0);
    const newId = maxId + 1;

    const newAdmin = {id: newId, username, email};
    const updatedAdmins = [...existingAdmins, newAdmin];

    localStorage.setItem('admins', JSON.stringify(updatedAdmins));

    setAdmin();
    setUsername('');
    setEmail('');
  };

  return (
    <div>
      <AdminNavbar />
      <h2><u>ADD ADMIN</u></h2>
      <form >
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
          <button type="button" onClick={handleAddAdmin}>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default AddItem
