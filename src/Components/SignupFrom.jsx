import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import CheckBox from '../Components/CheckBox';
import Form from '../Components/Form';
import InputText from '../Components/InputText';
import { useAuth } from '../contexts/AuthContext';

const SignupFrom = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();

  // Signup handler Function...
  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password Don't match!");
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);

      navigate('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to create an account!');
    }
  }

  return (
    <div>
      <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
        <InputText
          type="name"
          placeholder="Enter name"
          iconName="fa-regular fa-user"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <InputText
          type="email"
          placeholder="Enter email"
          iconName="fa-solid fa-at"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="Enter password"
          iconName="fa-solid fa-lock"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <InputText
          type="password"
          placeholder="Confirm password"
          iconName="fa-solid fa-unlock-keyhole"
          required
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <CheckBox
          text="I agree to the Terms & Conditions"
          required
          checked={agree}
          onChange={e => setAgree(e.target.checked)}
        />
        <Button disabled={loading} type="submit">
          <span>Submit now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <NavLink to="/login">Login</NavLink> instead.
        </div>
      </Form>
    </div>
  );
};

export default SignupFrom;
