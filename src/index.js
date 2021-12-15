import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/home/home';
import Login from './views/login/login';

render((
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
), document.getElementById('root'));
