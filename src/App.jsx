import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import Formulario from './componentes/Formulario';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
