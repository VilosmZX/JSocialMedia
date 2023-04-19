import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/css/index.css'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </BrowserRouter>
)
