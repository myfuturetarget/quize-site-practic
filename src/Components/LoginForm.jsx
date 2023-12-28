import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Form from '../Components/Form';
import InputText from '../Components/InputText';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  // Login handler Function...
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);

      navigate('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to Login!');
    }
  }
  return (
    <Form className={{ height: '330px' }} onSubmit={handleSubmit}>
      <InputText
        type="email"
        placeholder="Enter email"
        iconName="fa-solid fa-at"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputText
        type="password"
        placeholder="Enter password"
        iconName="fa-solid fa-lock"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        <span>Login</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <NavLink to="/signup">Signup</NavLink> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
