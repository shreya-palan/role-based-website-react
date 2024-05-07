import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import NotFoundPage from './components/NotFoundPage';
import AddItem from './components/Admin/AddItem';
import AddCategory from './components/Admin/AddCategory';
import EditItem from './components/Admin/EditItem';
import EditCategory from './components/Admin/EditCategory';
import ViewItem from './components/User/ViewItem';
import ViewCategory from './components/User/ViewCategory';
import RoleBasedPage from './components/RoleBasedPage';
import Login from './components/Login';
import AdminNotFound from './AdminNotFound';
import UserNotFound from './UserNotFound';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/admin" element={<RoleBasedPage id="1" />} />
          <Route path="/user" element={<RoleBasedPage id="2" />} />
          <Route path='/404Error' element={<NotFoundPage />} />
          <Route path='/addAdmin' element={<AddItem />} />
          <Route path='/addCategory' element={<AddCategory />} />
          <Route path='/editItem' element={<EditItem />} />
          <Route path='/editCategory' element={<EditCategory />} />
          <Route path='/viewItem' element={<ViewItem />} />
          <Route path='/viewCategory' element={<ViewCategory />} />
          <Route path="/admin/*" element={<AdminNotFound />} />
          <Route path="/user/*" element={<UserNotFound />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;