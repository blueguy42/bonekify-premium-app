import React, { Component } from 'react';
import Navbar from "./templates/SubsList";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from  '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SubsList from './templates/SubsList';

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
      default: "#323232"
    },
    mode: 'dark',
  },
});

class Admin extends Component{
    constructor(props){
      super(props)
      this.state = {
        subs : ['saul sub audrey', 'afan sub liza', 'kiky sub ulfa']
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (indeks) => {
        this.state.subs.splice(indeks,1)
        this.setState({
          subs: this.state.subs
        });
    }

    render() {
      return (
        <ThemeProvider theme={theme}>
        <Container maxWidth={false}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '75%',
                margin: '0 auto'
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginTop: '60px', marginBottom: '70px', fontWeight: '700', textShadow: '1px 1px 9px black',}}>
                Subscriptions Requests! 
              </Typography>
                {
                  this.state.subs.map((item,index) => <SubsList handleClick={this.handleClick} subs= {this.state.subs} nama= {item} indeks = {index} key = {index}></SubsList>)
                }
                <Pagination count={5} color="primary" sx = {{marginTop: '50px'}} />
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default Admin;