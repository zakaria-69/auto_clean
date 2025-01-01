import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Informations from './pages/Informations.jsx'
import Contact from './pages/Contact.jsx'
import Meetings from './pages/Meetings.jsx'
import Home from './pages/Home.jsx'
import { ThemeProvider } from './components/theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route  path='informations' exact element={<Informations/>}/>
      <Route path='contact' exact element={<Contact />}/>
      <Route path='meetings' exact element={<Meetings />}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
