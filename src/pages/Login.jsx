import React, { useState } from 'react'
import Registro from '../componentes/FormularioRegistro';
import logoImage2 from "../logo2rosa.png";

const Login = () => {

    return (
        <>

            <div className="container main-container custom-bg rounded">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div className="explore-container p-4">
                            <Registro />
                        </div>
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