import React, { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment, Link, Box, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/Firebase';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#0aed83',
    },
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      
      localStorage.setItem("userId", user.uid);
      
      navigate('/registration');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: '400px' },
        margin: 'auto',
        marginTop: '10vh',
        padding: '2rem',
        boxShadow: 3,
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          fullWidth
          margin="normal"
          color='error'
          size="small"
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          size="small"
          color='error'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" color='error' variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Login
        </Button>
        <Link href="/signup" color='error' underline="hover" style={{ display: 'block', marginTop: '10px' }}>
         Signup
        </Link>
      </form>
    </Box>
  );
};

export default Login;