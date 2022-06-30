import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import Categories from './components/Categories';
import Youtube from './components/youtube'
import Sidebar from './components/Sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Youtube />
    <App />
  </React.StrictMode>
);
