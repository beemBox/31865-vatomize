import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); //? ! <- para cuando estamos seguros de que el valor nunca será null en TS
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);