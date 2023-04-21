import React, { useState, useEffect } from 'react';
import './Admin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedIsLoggedIn === 'true');
  }, []);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (isLoggedIn) {
    return (
      <div className='logoutForm'>
        <div className='loginContainer'>
          <h1>Welcome, Admin!</h1>
          <button className='logoutBtn' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className='loginForm'>
      <div className='loginContainer'>
        <label>
          <input placeholder='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='loginBtn' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;