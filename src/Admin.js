import React, { Component } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Subs from './templates/Subs';
import Cookies from "universal-cookie";

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
      default: "#323232"
    },
    mode: 'dark',
  },
});

class Admin extends Component{
    constructor(props){
      super(props)
      this.state = {
        subs : [],
        page : 1
      }
      this.handleClick = this.handleClick.bind(this);
      this.handlePagination = this.handlePagination.bind(this);
      this.getSubs = this.getSubs.bind(this)
    }

    componentDidMount(){
      this.getSubs()
    }

    getSubs = () => {
      fetch('http://localhost:1400/subscription/getpending', {
            method: 'GET',
            mode: "cors",       
            headers: {
              'Content-Type': 'application/json',
              'Authorization': cookies.get('token')
          }
          
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
          let temp = []
          data.return.forEach((x, i) => {
            temp.push([x.subscriber_id, x.creator_id])
          })
          this.setState({
            subs: temp
          });
        })
      }
      
    handleClick = (indeks) => {
        this.state.subs.splice(indeks,1)
        this.setState({
          subs: this.state.subs
        });
    }

    handlePagination = (event,p) => {
      this.setState({
        page: p
      });
    }

    render() {
      let rowsPerPagination = 3
      let slicedArray = this.state.subs.slice((this.state.page-1)*rowsPerPagination, (this.state.page-1)*rowsPerPagination + rowsPerPagination)
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
              <Typography component="h1" variant="h4" sx={{marginTop: '60px', fontWeight: '700', textShadow: '1px 1px 9px black',}}>
                Subscriptions Requests! 
              </Typography>
                {
                  slicedArray.map((item,index) => <Subs handleClick={this.handleClick} nama= {item} key = {index}></Subs>)
                }
                <Pagination onChange = {this.handlePagination} count={Math.ceil(this.state.subs.length/rowsPerPagination)} color="primary" sx = {{marginTop: '50px', marginBottom:'20px'}} />
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default Admin;