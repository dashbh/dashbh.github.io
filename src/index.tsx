import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';



ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);


OfflinePluginRuntime.install();