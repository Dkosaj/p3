import React, { useState } from 'react';
import './RegisterForm.css'; 

const RegisterForm = ({ users, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.find(u => u.username === username)) {
      alert('Username already exists');
    } else {
      const newUser = {
        username,
        password,
        avatar
      };
      onRegister(newUser);
      setUsername('');
      setPassword('');
      setAvatar(null);
    }
  };

  const handleFileChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="login-form">
      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Zarejestruj się:</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nazwa:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Hasło:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Awatar:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          {avatar && <img src={avatar} alt="Avatar Preview" width="100" />}
          <button type="submit">Zarejestruj się</button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;