import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import { Context } from '../store/AppContext'

const PrivateRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/" replace />
    }
    return children ? children : <Outlet />

}

// const PrivateRoute = () => {
//     const { store, actions } = useContext(Context);

//     if (store.access_token) {
//         return <Outlet />
//     } else if (JSON.parse(sessionStorage.getItem('access_token'))) {
//         return actions.cargarSesion()
//     } else {
//         return <Navigate to={'/'} />
//     }

// }

export default PrivateRoute