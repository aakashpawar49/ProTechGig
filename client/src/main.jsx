import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SnackbarProvider anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}>
    <App />
  </SnackbarProvider>
  </React.StrictMode>,
)
