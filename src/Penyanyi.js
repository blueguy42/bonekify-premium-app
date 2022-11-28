import React, { Component } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TambahLagu from './templates/TambahLagu';

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
class Penyanyi extends Component{
    constructor(props){
      super(props)
      this.state = {
        tab : 0 // 1 untuk case liat lagu, 2 untuk case tambah lagu
      }
      this.handleTab = this.handleTab.bind(this);
    }

    handleTab = (event,newtab) => {
      console.log(newtab)
      this.setState({
        tab: newtab
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
<Tabs value={this.state.tab} onChange={this.handleTab} sx = {{marginTop: '50px'}}>
          <Tab label="Tambah Lagu" />
          <Tab label="List Lagu" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {this.state.tab === 0 && (
          <TambahLagu />
        )}
        {this.state.tab === 1 && (
          <Box>
            <Typography>The second tab</Typography>
          </Box>
        )}
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default Penyanyi;