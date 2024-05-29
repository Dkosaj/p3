import React, { useState } from 'react';
import ThreadList from './components/ThreadList';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleRegister = (user) => {
    setUsers([...users, user]);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <>
          <h1>Witamy, {loggedInUser.username}</h1>
          <button onClick={handleLogout}>Wyloguj</button>
          <ThreadList loggedInUser={loggedInUser} />
        </>
      ) : (
        <>
          <h1>Login</h1>
          <LoginForm users={users} onLogin={handleLogin} />
          <h1>Register</h1>
          <RegisterForm users={users} onRegister={handleRegister} />
        </>
      )}
    </div>
  );
};

export default App;
