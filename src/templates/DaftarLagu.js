import React, { Component } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Lagu from './Lagu';

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

class DaftarLagu extends Component{
    constructor(props){
      super(props)
      this.state = {
        songs : ['3000 tahun lagi', 'Pupus', 'Risalah Hati', 'Asalkan kau bahagia'],
        page : 1
      }
      this.handleDelete = this.handleDelete.bind(this);
      this.handlePagination = this.handlePagination.bind(this);
      this.handleEdit = this.handleEdit.bind(this)
    }

    handleDelete = (indeks) => {
        this.state.songs.splice(indeks,1)
        this.setState({
          songs: this.state.songs
        });
    }

    handleEdit = (indeks, nama) => {
        let newArray = this.state.songs
        newArray[indeks] = nama
        this.setState({
            songs: newArray
          });
    }

    handlePagination = (event,p) => {
      this.setState({
        page: p
      });
    }

    render() {
      let rowsPerPagination = 3
      let slicedArray = this.state.songs.slice((this.state.page-1)*rowsPerPagination, (this.state.page-1)*rowsPerPagination + rowsPerPagination)
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
              <Typography component="h1" variant="h4" sx={{marginTop: '20px', marginBottom: '10px', fontWeight: '700', textShadow: '1px 1px 9px black',}}>
                See and Edit Songs Here! 
              </Typography>
                {
                  slicedArray.map((item,index) => <Lagu handleDelete={this.handleDelete} handleEdit={this.handleEdit} songs= {this.state.songs} nama= {item} indeks = {index + (this.state.page-1)*rowsPerPagination} key = {index}></Lagu>)
                }
                <Pagination onChange = {this.handlePagination} count={Math.ceil(this.state.songs.length/rowsPerPagination)} color="primary" sx = {{marginTop: '50px', marginBottom:'20px'}} />
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default DaftarLagu;