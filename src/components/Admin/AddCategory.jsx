import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './ViewAdmin.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

const ViewAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [editAdmin, setEditAdmin] = useState(null);
  const loggedInUsername = localStorage.getItem('username');

  useEffect(() => {
    const existingAdmins = JSON.parse(localStorage.getItem('admins')) || [];
    setAdmins(existingAdmins);
  }, []);

  const handleDeleteAdmin = (id) => {
    const updatedAdmins = admins.filter((admin) => {
      // Allow delete only if the logged-in user matches the admin being deleted
      return admin.id !== id || admin.username !== loggedInUsername;
    });
    setAdmins(updatedAdmins);
    localStorage.setItem('admins', JSON.stringify(updatedAdmins));
  };

  const handleEditAdmin = (admin) => {
    // Allow edit only if the logged-in user matches the admin being edited
    if (admin.username === loggedInUsername) {
      setEditAdmin(admin);
    }
  };

  const handleSaveEdit = () => {
    const updatedAdmins = admins.map((admin) => {
      if (admin.id === editAdmin.id) {
        return editAdmin;
      }
      return admin;
    });
    setAdmins(updatedAdmins);
    localStorage.setItem('admins', JSON.stringify(updatedAdmins));
    setEditAdmin(null);
  };

  return (
    <div>
      <AdminNavbar />
      <h2><u>VIEW ADMIN</u></h2>
      {admins.length > 0 ? (
        <table className='admin-table'>
          <thead>
            <tr>
              <th style={{ color: "black", fontSize: "42px" }}>Username</th>
              <th style={{ color: "black", fontSize: "42px" }}>Email</th>
              <th style={{ color: "black", fontSize: "42px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{editAdmin && editAdmin.id === admin.id ? <input type="text" value={editAdmin.username} onChange={(e) => setEditAdmin({ ...editAdmin, username: e.target.value })} style={{ width: "150px" }} /> : admin.username}</td>
                <td>{editAdmin && editAdmin.id === admin.id ? <input type="text" value={editAdmin.email} onChange={(e) => setEditAdmin({ ...editAdmin, email: e.target.value })} style={{ width: "150px" }} /> : admin.email}</td>
                <td>
                  {admin.username === loggedInUsername && (
                    <>
                      {editAdmin && editAdmin.id === admin.id ? (
                        <>
                          <button onClick={handleSaveEdit}>Save</button>
                          <button onClick={() => setEditAdmin(null)}>Cancel</button>
                        </>
                      ) : (
                        <>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => handleEditAdmin(admin)}><EditNoteIcon /></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={() => handleDeleteAdmin(admin.id)}><DeleteIcon /></span>
                        </>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No admins found</p>
      )}
    </div>
  )
}

export default ViewAdmin;
