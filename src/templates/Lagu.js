import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {

    primary: {
      main: '#656565',

    },
    secondary: {
      main: '#656565',
      contrastText: '#656565',
    },

    // mode: 'dark',
  },
});

export default function Lagu(props) {

  return (
    <ThemeProvider theme={theme}>   
        <Grid container spacing={2} sx = {{marginTop:'50px', paddingBottom:'15px', textAlign: 'center', alignItems: 'center', background: 'linear-gradient(30deg, rgba(60,99,96,1) 35%, rgba(61,103,72,1) 100%)', borderRadius: 3 }}>
            <Grid item xs={2}>
            <Button color="error"
                  type="submit"
                  onClick = {() => props.handleDelete(props.indeks)}
                  variant="contained"
                >
                  Delete
            </Button >
            </Grid>
            <Grid item xs={8}>
                <Card sx = {{borderRadius: 2, backgroundColor: 'transparent', border: 'none', boxShadow: 0}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'black'}}>
                        {props.nama}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
            <Button color="success"
                  type="submit"
                  onClick = {() => props.handleDelete(props.indeks)}
                  variant="contained"
                >
                  Edit
            </Button >
            </Grid>
        </Grid>
    </ThemeProvider>
  );
}