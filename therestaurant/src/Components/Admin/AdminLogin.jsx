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
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>Admin</h2>
          <br />
          <div class="underline-title"></div>
        </div>
        <form class="form">
          <label>&nbsp;Username</label>
          <div >
            <label>
              <input id="user-email" class="form-content" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <div class="form-border"></div>
            <br />
            <label for="user-password">&nbsp;Password</label>
            <br />
            <label>
              <input id="user-password" class="form-content" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div class="form-border"></div>
            <br />
            <button id="submit-btn" onClick={handleLogin}>Login</button>
          </div>
        </form>
      </div> 
    </div>
  );
};

export default AdminLogin;