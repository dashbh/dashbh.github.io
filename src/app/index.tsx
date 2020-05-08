import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from '../components/Header';
import theme from './theme';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';

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
            <Router>
              <Header />
              <Container component="main" >
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Container>
            </Router>
          </StylesProvider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
