import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSuccess, login } from '../features/auth/authSlice';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username, password }))
      .then((response) => {
        // Save the token to localStorage
        localStorage.setItem('token', response.payload.token);
        // Dispatch action to update authentication status
        dispatch(authSuccess(response.payload.user)); // Assuming the payload contains user information
        // Redirect or do any additional logic
      })
      .catch((error) => {
        // Handle login failure
        console.error('Login failed:', error);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
