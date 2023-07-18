import React from 'react'

const NotificacionUsuario = ({ label }) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            {label}
        </li>
    )
}

export default NotificacionUsuario