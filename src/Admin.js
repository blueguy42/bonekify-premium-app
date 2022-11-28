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
        subs : ['saul sub audrey', 'afan sub liza', 'kiky sub ulfa'],
        page : 1
      }
      this.handleClick = this.handleClick.bind(this);
      this.handlePagination = this.handlePagination.bind(this);
    }

    handleClick = (indeks) => {
        this.state.subs.splice(indeks,1)
        this.setState({
          subs: this.state.subs
        });
        console.log(this.state.subs)
    }

    handlePagination = (event) => {
      this.setState({
        page: event.target.textContent
      });
    }

    render() {
      let slicedArray = this.state.subs.slice((this.state.page-1)*2, (this.state.page-1)*2 + 2)
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
                  slicedArray.map((item,index) => <SubsList handleClick={this.handleClick} subs= {this.state.subs} nama= {item} indeks = {index + (this.state.page-1)*2} key = {index}></SubsList>)
                }
                <Pagination onClick = {(event) => this.handlePagination(event)} count={Math.ceil(this.state.subs.length/2)} color="primary" sx = {{marginTop: '50px'}} />
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default Admin;