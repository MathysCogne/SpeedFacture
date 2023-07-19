import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './style/app.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>  A supprimer en production
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)