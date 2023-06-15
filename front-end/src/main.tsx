import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './app/store.ts';
import { MyGlobalStyle } from './styled/global.ts';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals.ts';

const APP_MOUNTING_ROOT = document.getElementById('root');

if (APP_MOUNTING_ROOT == null) {
  throw new Error('React mounting root is not found');
}

ReactDOM.createRoot(APP_MOUNTING_ROOT).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
          <MyGlobalStyle />
      </HashRouter>
      </PersistGate >
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
