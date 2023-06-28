import React, { useState } from 'react'
import Registro from '../componentes/FormularioRegistro';
import logoImage from "../logo1.png";
import logoImage2 from "../logo2rosa.png";

const Login = () => {

    return (
        <>
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="/">
                    <img
                        src={logoImage}
                        alt="Logo"
                        width="150"
                        height="150"
                        className="logo"
                    />
                </a>
            </nav>

            <div className="container main-container custom-bg rounded">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="explore-container p-4">
                            <h2>Explora personas que quieran intercambiar conocimiento</h2>
                            <button className="btn btn-dark">Explorar</button>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Registro />
                    </div>
                </div>
            </div>

            <footer className="text-center py-4">
                <p>&copy; 2023 Fidi. Todos los derechos reservados.</p>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <img src={logoImage2} alt="Logo" width="50" height="40" className="footer-logo" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Login