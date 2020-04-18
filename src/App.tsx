import * as React from 'react';

import Header from './Layout/Header';

import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <div className="Content">
          Hi, I'm a full-stack developer working in Bangalore.
          <br />
          I work with React, Angular, Node.js etc.
        </div>
      </div>
    );
  }
}

export default App;
