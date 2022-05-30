import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      contrastText: '#fff',
      main: '#33d7ed',
      darker: '#fd8432'
    },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
  },
});

export default function Btn() {
  return (
    <ThemeProvider theme={theme}>
      <Button color='primary' variant="contained">Primary</Button>
      {/* <Button color="secondary">Secondary</Button> */}
    </ThemeProvider>
  );
}
