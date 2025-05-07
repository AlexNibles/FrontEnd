import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import Admindashboard from './components/Admindashboard';
import Register from './components/Register';
function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false); // Modo login o registro


  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };
  const handleLogout = () => {
    setUser(null);
  };

const handleRegister = (newUser) => {
  // Aquí puedes guardarlo en una API o en localStorage
  console.log('Nuevo usuario registrado:', newUser);
  setIsRegistering(false); // volver a login
};

  return (
    <>
      {!user ? (
        isRegistering ? (
          <Register
            onRegister={handleRegister}
            goToLogin={() => setIsRegistering(false)}
          />
        ) : (
          <Login
            onLogin={handleLogin}
            goToRegister={() => setIsRegistering(true)}
          />
        )
      ) : user.role === 'admin' ? (
        <Admindashboard user={user} onLogout={handleLogout} />
      ) : (
        <UserDashboard user={user} onLogout={handleLogout} />
      )}
    </>
  );
  
}

export default App;
