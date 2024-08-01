import React, { useState } from 'react';
import { useLoginUser } from '../../../services/auth/login';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading, error, isSuccess } = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      mutate({ email, password });
      console.log('login success');
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging...' : 'Login'}
      </button>
      <Link to="/register">Register</Link>
      {/* {error && <div>Error: {error.message}</div>} */}
      {isSuccess && <div>Login successful!</div>}
    </form>
  );
}
