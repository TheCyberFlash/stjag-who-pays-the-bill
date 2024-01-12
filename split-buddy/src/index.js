import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NamesProvider } from './context/NamesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NamesProvider>
      <App />
    </NamesProvider>
  </React.StrictMode>
);