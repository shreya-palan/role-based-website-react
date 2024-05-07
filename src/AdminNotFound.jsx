// AdminNotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from './assets/error_img.jpg';

const AdminNotFound = () => {
  return (
    <div>
      <img src={NotFoundImage} style={{ maxWidth: '100%' }} alt="Not Found" />
      <div>
        <button>
          <Link to="/admin">Back to Admin Page</Link>
        </button>
      </div>
    </div>
  );
};

export default AdminNotFound;
