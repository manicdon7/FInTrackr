import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
        </Routes>
    </Router>
  )
}

export default App