import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Header from './Layout/Header';
import LogoAvatar from './Layout/LogoAvatar';
import { Grid, Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff"
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container component="main" >
            <div className="Content">
              <Grid container
                alignItems="center"
                justify="center"
                style={{ minHeight: 'calc(100vh - 200px)' }}
                spacing={1}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center" item xs={12} sm={6} spacing={3}>
                  <LogoAvatar />
                </Grid>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center" item xs={12} sm={6} spacing={3}>
                  <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
                    I'm a full-stack developer working in Bangalore.
                    <br />
                    I work with React, Angular, Node.js etc.
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Container>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
