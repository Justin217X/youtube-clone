import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import Categories from './components/Categories';
import Youtube from './components/youtube'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Categories />
    <Youtube />
    <App />
  </React.StrictMode>
);
