import React, { useState } from 'react';
import './LoginForm.css'; 

const LoginForm = ({ users, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      setLoginErrorMessage('Nieprawidłowa nazwa użytkownika lub hasło');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label>Nazwa:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Hasło:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {loginErrorMessage && <div className="error-message">{loginErrorMessage}</div>}
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default LoginForm;
