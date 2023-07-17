import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import injectContext, { Context } from './store/AppContext'
import Navbar from './componentes/Navbar';
import Chat from './pages/Chat';
import Auth from './componentes/Auth';
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
import LoginForm from './componentes/LoginForm';
// import NotFound from './pages/NotFound';
import PrivateRoute from './utils/PrivateRoute';
import Settings from './pages/Settings';
import MostrarNavBar from './componentes/MostrarNavBar';

const App = () => {

  const { store, actions } = useContext(Context);

  return (
    <Router>
      <MostrarNavBar>
        <Navbar />
      </MostrarNavBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/formulario/*" element={<Formulario />} />
        <Route path="/" element={<PrivateRoute user={store.currentUser} replace />}>
          <Route path="/chat/*" element={<Chat />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings/*" element={<Settings />} />
        </Route>
        <Route path="/auth" component={Auth} />
        <Route path="/loginform" element={<LoginForm />} />
        {/* <Route path="/administrar">
          <Route index element={<GestionarNoticia />} />
          <Route path="/administrar/agregarNoticia" element={<AgregarNoticia />} />
          <Route path="/administrar/modificarNoticia" element={<ModificarNoticia />} />
          <Route path="/administrar/eliminarNoticia" element={<EliminarNoticia />} />
        </Route> */}
        {/* <Route path='' element={<NotFound />} />
        <Route path='/administrar' element={<GestionarNoticia />} />
        <Route path="/administrar/agregarNoticia" element={<AgregarNoticia />} />
        <Route path="/administrar/modificarNoticia" element={<ModificarNoticia />} />
        <Route path="/administrar/eliminarNoticia" element={<EliminarNoticia />} /> */}
      </Routes >
    </Router >
  );
};

export default injectContext(App);