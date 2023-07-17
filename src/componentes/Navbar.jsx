import logoImage from "../logo1.png";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRadiation } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-ligth">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="Logo"
            width="90"
            height="30"
            className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/chat">
                <b>Chat</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/explore">
                <b>Explore</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/matches">
                <b>Matches</b>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            {
              store.role == 1 ?
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/administrar">
                    <FontAwesomeIcon icon={faRadiation} />
                  </Link>
                </li>
                :
                null
            }
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Opciones</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Ver perfil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Configuración
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => localStorage.removeItem("currentUser")}>
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
