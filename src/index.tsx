import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import './assets/scss/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

serviceWorker.register();