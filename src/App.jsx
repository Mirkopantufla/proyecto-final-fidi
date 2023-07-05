import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Chat from './pages/Chat';
import Formulario from './componentes/Formulario';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Matches from './pages/Matches';
import Profile from './pages/Profile';
import Dashboardv from './pages/Dashboardv';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/dashboard' element={<Dashboardv />} />
      </Routes>
    </Router>
  );
};

export default App;

