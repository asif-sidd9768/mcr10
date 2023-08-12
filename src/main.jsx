import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { InventoryContext, InventoryProvider } from './contexts/InventoryContext.jsx'

export {InventoryContext}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InventoryProvider> 
      <Router>
        <App />
      </Router>
    </InventoryProvider>
  </React.StrictMode>,
)
