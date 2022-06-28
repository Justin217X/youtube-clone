import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Categories from './components/Categories';
import Youtube from './components/youtube'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Categories />
    <Youtube />
    <App />
  </React.StrictMode>
);
