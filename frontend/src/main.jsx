import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './public/css/bootstrap.min.css'
import "./public/css/iofrm-theme29.css"
import "./public/css/iofrm-style.css"
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout></Layout>
  </StrictMode>,
)
