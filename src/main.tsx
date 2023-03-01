import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CalendarContextProvider from './context/CalendarContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalendarContextProvider>
      <App />
    </CalendarContextProvider>
  </React.StrictMode>,
)
