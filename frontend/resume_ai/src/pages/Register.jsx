import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Added useNavigate here
import './Register.css'; 

const Register = () => {
  const navigate = useNavigate(); // 2. Initialize the redirect function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      
      alert('Account created successfully!');
      
      // 3. This automatically sends the user back to the login page ("/")
      navigate('/'); 
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-card">
        <h2 className="reg-title">Create an Account</h2>
        
        {error && <div className="reg-error">{error}</div>}
        {success && <div className="reg-success">Registration successful! Redirecting to login...</div>}

        <form onSubmit={onSubmit} className="reg-form">
          <div className="reg-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="name"
              required
            />
          </div>

          <div className="reg-group">
            <label htmlFor="reg-email">Email Address</label>
            <input
              type="email"
              id="reg-email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="email"
              required
            />
          </div>

          <div className="reg-group">
            <label htmlFor="reg-password">Password</label>
            <input
              type="password"
              id="reg-password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="reg-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Repeat your password"
              required
            />
          </div>

          <button type="submit" className="reg-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* 4. Added a manual fallback link at the bottom just in case */}
        <div className="reg-footer">
          <p>Already have an account? <Link to="/" className="reg-link">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;