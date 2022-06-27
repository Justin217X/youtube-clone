import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Youtube from './components/youtube'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Youtube />
    <App />
  </React.StrictMode>
);
