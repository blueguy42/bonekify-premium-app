import React, { Component } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from  '@mui/material/Paper';
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
        default: "#323232"
    },
    mode: 'dark',
  },
});

class TambahLagu extends Component{
    render() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dummy submit');
        };

      return (
        <ThemeProvider theme={theme}>
          <Paper vairant = "outlined" elevation = {6}  sx={{width: '50%', margin: '10px auto', padding: '50px', marginTop: '40px',}}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 9px gold',}}>
                Add your songs here!
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="judul"
                  label="judul"
                  name="judul"
                  autoFocus
                  sx = {{color: 'red'}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="audiopath"
                  label="audiopath"
                  id="audiopath"
                />
                <Button color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button >
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      )
    }
  }
  
export default TambahLagu;