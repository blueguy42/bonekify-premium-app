import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {

    primary: {
      main: '#FFFFFF',

    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: "#FFFFFF"
    },
    // mode: 'dark',
  },
});

export default function SubsList(props) {

  return (
    <ThemeProvider theme={theme}>   
        <Grid container spacing={2} sx = {{marginBottom:'50px', textAlign: 'center', alignItems: 'center',}}>
            <Grid item xs={2}>
            <Button color="error"
                  type="submit"
                  variant="contained"
                >
                  Reject
            </Button >
            </Grid>
            <Grid item xs={8}>
                <Card sx = {{borderRadius: 2}}>
                    <CardContent sx = {{ backgroundColor: '#323232', border: '3px solid white'}}>
                        <Typography sx={{ fontSize: 25, color: 'white'}}>
                        {props.nama}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
            <Button color="success"
                  type="submit"
                  variant="contained"
                >
                  Accept
            </Button >
            </Grid>
        </Grid>
    </ThemeProvider>
  );
}