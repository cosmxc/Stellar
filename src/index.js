import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './assets/scss/main.scss';
import './assets/css/normalize.css';
import './assets/css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
