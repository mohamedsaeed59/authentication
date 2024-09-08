import React, { useState, useEffect } from 'react'
import { TextField, Box, Typography } from '@mui/material';
import Image from 'next/image';
import Logo from "@/assets/images/logo.svg"
import { useAppDispatch } from '@/store/mainReducer';
import { AuthService } from '@/store/auth/auth.service'
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const LoginContent = () => {
    const dispatch = useAppDispatch();
    const {push} = useRouter();
    const [email, setEmail] = useState('admin@admin.com');
    const [password, setPassword] = useState('12345678');
    const [uid, setUid] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
       dispatch(AuthService().loginUser({ email, password, uid }));
       const staticToken = 'one-hand1234';
       document.cookie = `token=${staticToken}; path=/;`;
       const token = document.cookie.split('; ').find(row => row.startsWith('token='));    
      if (token && token.includes('one-hand1234')) {
        push('/');
      }
    };

    useEffect(() => {
      const generatedUid = uuidv4();
      setUid(generatedUid);
    }, []);

      return (
        <Box className="pageContainer">
          <Box className="formContainer">
            <Box className="header">
              <Image src={Logo} className="formTitle" alt='Logo' />
              <Typography variant="h5" className="formTitle">Log In</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box className="formGroup">
                <label htmlFor="email" className="label">Email:</label>
                <TextField
                  id="email"
                  className="inputField"
                  fullWidth
                  margin="normal"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box className="formGroup">
                <label htmlFor="password" className="label">Password:</label>
                <TextField
                  id="password"
                  className="inputField"
                  fullWidth
                  margin="normal"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <button 
                color="primary" 
                type="submit" 
                className="submitButton"
              >
                Log in
              </button>
            </form>
          </Box>
        </Box>
      );
    };
    

export default LoginContent