import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="218045808181-1kchjeuejh21n0729cr2r9crie2lnh2t.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ GoogleOAuthProvider>
)
