import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/normalize.scss'
import './style/reset.scss'
import './style/app.scss'

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>  A supprimer en production
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)