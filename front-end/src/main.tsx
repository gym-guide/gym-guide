import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const APP_MOUNTING_ROOT = document.getElementById('root');

if (APP_MOUNTING_ROOT == null) {
  throw new Error('React mounting root is not found');
}

ReactDOM.createRoot(APP_MOUNTING_ROOT).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={undefined}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
