import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();//createContext is used to create a new object
//UserContext is used to share states and functions 

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);

  const setAdmin = () => setUserType('admin');
  const setUser = () => setUserType('user');

  return (
    <UserContext.Provider value={{ userType, setAdmin, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
