import React, { useState } from 'react';
import { useRegisterUser } from '../../../services/auth/registration';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isLoading, error, isSuccess } = useRegisterUser();
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      mutate({ email, password });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
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
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {/* {error && <div>Error: {error.message}</div>} */}
      {isSuccess && <div>Registration successful!</div>}
    </form>
  );
}
