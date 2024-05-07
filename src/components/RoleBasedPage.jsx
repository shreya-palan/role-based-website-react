import React from 'react'
import { useUser } from './UserContext';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

import NotFoundPage from './NotFoundPage';

const RoleBasedPage = ({id}) => {
    const {userType} = useUser();
   

    const renderPage = () => {
        if (userType === 'admin') {
            // Render admin page
            return <AdminPage adminId={id} />;
          } else if (userType === 'user') {
            // Render user page
            return <UserPage userId={id} />;
          } else {
            // Render NotFoundPage for other cases
            return <NotFoundPage />;
          }
    };
  return (
    <div>
      {renderPage()}
    </div>
  )
}

export default RoleBasedPage