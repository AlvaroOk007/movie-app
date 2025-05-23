import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
//Obtengo la a
const root = createRoot(document.getElementById('root'))

root.render(
  <HashRouter >
    <App />
  </HashRouter >
)