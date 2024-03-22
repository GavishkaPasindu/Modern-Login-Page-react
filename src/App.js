import React, { useState } from 'react';
import './App.css';

const ModernLoginPage = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleActive = () => {
    setIsSignUpActive(!isSignUpActive);
    setMessage('');
  };

  const displayMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    console.log("Registration details:", { name, email, password });

    // Show success message and clear form fields
    displayMessage('Registered successfully! Please log in.');
    setName('');
    setEmail('');
    setPassword('');

    // Switch to the sign-in form
    setIsSignUpActive(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    console.log("Login details:", { email, password });

    // Show success message and clear form fields
    displayMessage('Logged in successfully!');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
      {message && <div className="message">{message}</div>} {/* Display success message */}
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <span>use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <span>use your email password</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back SIGNSPHERE!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={toggleActive}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="hidden" id="register" onClick={toggleActive}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLoginPage;
