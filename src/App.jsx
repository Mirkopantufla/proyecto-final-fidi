import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import Formulario from './componentes/Formulario';
import Dashboardv from './pages/Dashboardv';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/dashboard' element={<Dashboardv />} />
      </Routes>
    </Router>
  );
}

export default App;
