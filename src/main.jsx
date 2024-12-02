import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Informations from './pages/Informations.jsx'
import Contact from './pages/Contact.jsx'
import Meetings from './pages/Meetings.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route  path='informations' exact element={<Informations/>}/>
      <Route path='contact' exact element={<Contact />}/>
      <Route path='meetings' exact element={<Meetings />}/>
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
