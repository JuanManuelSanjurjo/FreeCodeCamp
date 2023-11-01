import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from "./Card"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Random Quote Machine</h1>
    <Card />
  </React.StrictMode>,
)
