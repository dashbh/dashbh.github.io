import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, Grid } from '@material-ui/core';

import Header from '../components/Header';
import MyAvatar from '../components/MyAvatar';
import theme from './theme';
import AboutMe from '../components/AboutMe';

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
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
