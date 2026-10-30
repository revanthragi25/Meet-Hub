import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Events from './pages/Events/Events'
import Messaging from './pages/Messaging/Messaging'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/messaging' element={<Messaging/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
