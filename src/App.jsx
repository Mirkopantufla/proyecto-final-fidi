import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import injectContext, { Context } from './store/AppContext'
import Navbar from './componentes/Navbar';
import Chat from './pages/Chat';
import Formulario from './componentes/Formulario';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Matches from './pages/Matches';
import Profile from './pages/Profile';
import GestionarNoticia from './pages/GestionarNoticia';
import AgregarNoticia from './pages/AgregarNoticia';
import ModificarNoticia from './pages/ModificarNoticia';
import EliminarNoticia from './pages/EliminarNoticia';
import Dashboardv from './pages/Dashboardv';
// import NotFound from './pages/NotFound';
// import PrivateRoute from './utils/PrivateRoute';
import Settings from './pages/Settings';

const App = () => {

  const { store } = useContext(Context);

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
        <Route path="/settings/*" element={<Settings />} />
        <Route path='/dashboard' element={<Dashboardv />} />
        {/* <Route path="/administrar" element={<PrivateRoute user={store.currentUser} />}>
          <Route index element={<GestionarNoticia />} />
          <Route path="/administrar/agregar" element={<AgregarNoticia />} />
          <Route path="/administrar/modificar" element={<ModificarNoticia />} />
          <Route path="/administrar/eliminar" element={<EliminarNoticia />} />
        </Route> 
        <Route path='' element={<NotFound />} />
        */}
        <Route path='/administrar' element={<GestionarNoticia />} />
        <Route path="/administrar/agregarNoticia" element={<AgregarNoticia />} />
        <Route path="/administrar/modificarNoticia" element={<ModificarNoticia />} />
        <Route path="/administrar/eliminarNoticia" element={<EliminarNoticia />} />
      </Routes>
    </Router>
  );
};

export default injectContext(App);