import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('App element not found');
}

ReactDOM.createRoot(container).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(HashRouter, null, React.createElement(App))
  )
);