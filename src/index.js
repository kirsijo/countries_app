import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from 'react-redux';
import store from "./app/store";
import { saveState } from './app/localStorage';

store.subscribe(() => {
  saveState(store.getState())
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

