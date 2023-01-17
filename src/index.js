import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SettingsContextProvider from './Context/SettingsContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <SettingsContextProvider>
    <App />
    </SettingsContextProvider>
  
);

