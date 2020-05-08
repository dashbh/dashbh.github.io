import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, Grid, StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from '../components/Header';
import theme from './theme';
import AboutMe from '../components/AboutMe';

const generateClassName = createGenerateClassName({
  productionPrefix: Math.random().toString(36).substring(6), // Generate random string
  disableGlobal: true
});

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <StylesProvider generateClassName={generateClassName}>
          <CssBaseline />
          <Header />
          <Container component="main" >
            <div className="Content">
              <Grid container
                alignItems="center"
                justify="center"
                style={{ minHeight: 'calc(100vh - 200px)' }}
                spacing={1}>
                {/* <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center" item xs={12} sm={6} spacing={3}>
                  <MyAvatar />
                </Grid> */}
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center" item xs={12} sm={6} spacing={3}>
                  <AboutMe />
                </Grid>
              </Grid>
            </div>
          </Container>
          </StylesProvider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
