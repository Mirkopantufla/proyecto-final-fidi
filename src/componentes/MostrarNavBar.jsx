import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const MostrarNavBar = ({ children }) => {

    const vistaUsuario = useLocation();
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        if (vistaUsuario.pathname === '/' || vistaUsuario.pathname === '/formulario' || vistaUsuario.pathname === '/loginform') {
            setMostrar(false)
        } else {
            setMostrar(true)
        }

    }, [vistaUsuario])

    return (
        <>{mostrar && children}</>
    )
}

export default MostrarNavBar