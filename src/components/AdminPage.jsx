import React from 'react';
import AdminNavbar from './Admin/AdminNavbar';

const AdminPage = () => {
  const username = localStorage.getItem('username');
  return (
 <div>
      <AdminNavbar username={username}/>
      <h1 style={{ color: 'white' , fontSize: '100px'}}>WELCOME ADMIN</h1>
    </div>
  );
};

export default AdminPage;
