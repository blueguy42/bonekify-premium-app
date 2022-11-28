import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

class Penyanyi extends Component{
    render() {

      return (
        <ThemeProvider theme={theme}>
        
        </ThemeProvider>
      )
    }
  }
  
export default Penyanyi;