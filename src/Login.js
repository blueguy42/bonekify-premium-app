import React, { Component } from 'react';
import Cookies from "universal-cookie";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from  '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cookies = new Cookies();

const theme = createTheme({
  palette: {

    primary: {
      main: '#BC9928',

    },
    secondary: {
      main: '#0000ff',
      contrastText: '#00ff00',
    },
    background: {
      default: "#242424"
    },
    mode: 'dark',
  },
});

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      errorMsg: '',
      status: false
    }
  }

    render() {

      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let username= data.get('username')
        let password= data.get('password')

        if ((username.length === 0) || (password.length === 0)){
          this.setState({
            errorMsg : 'username atau password tidak boleh kosong!'
          });
        }
        else {
          let dataToSend = JSON.stringify({"username": username, "password": password });
          fetch('http://localhost:1400/user/login', {
            method: 'POST',
            mode: "cors",
            body: dataToSend,        
            headers: {
              'Content-Type': 'application/json'
          }
          
        }).then((response) => {
          this.setState({
            status : response.ok
          });
          return response.json();
        })
        .then((data) => {
          if (!this.state.status){
            this.setState({
              errorMsg: data.message
            });
          } else {
            console.log(data)
            cookies.set('isAdmin', data.isAdmin, {path: '/', expires: new Date(Date.now()+3600*24)});
            cookies.set('token', data.token, {path: '/', expires: new Date(Date.now()+3600*24)});
            cookies.set('user_id', data.user_id, {path: '/', expires: new Date(Date.now()+3600*24)});
            
            if (data.isAdmin){
             window.location.href = "/admin"
            }
            else{
              window.location.href = "/penyanyi"
            }
          }
        })
      }

      };

      return (
        <ThemeProvider theme={theme}>
          <Paper vairant = "outlined" elevation = {6}  sx={{width: '50%', margin: '10px auto', padding: '50px', marginTop: '145px',}}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 9px gold',}}>
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '90%' }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  sx = {{color: 'red'}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button >
                { this.state.errorMsg.length >0  &&
                  <div><Alert sx = {{width: '100%', textAlign: 'center'}} severity="error">{this.state.errorMsg}</Alert><br /></div>
                }
                <Link href="/register" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      )
    }
  }
  
export default Login;