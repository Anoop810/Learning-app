// Register.js in ./Components folder
import React, { useState } from 'react';
import './Auth.css';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !age) {
      setError('All fields are required!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((u) => u.email === email)) {
      setError('Email already exists!');
      return;
    }

    const newUser = { name, email, password, age, progress: 'Beginner' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onRegister(newUser);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
