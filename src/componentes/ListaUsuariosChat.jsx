import React from 'react'
import '../estilos/ListaUsuariosChat.css'


const ListaUsuariosChat = ({ usuario, estado, ultimoMsjRecibido, srcFotografia, funcionClick }) => {

    return (
        <div className='d-flex border-top border-dark py-2 chatHover' onClick={funcionClick}>
            <img className='me-4 rounded-circle p-2 tamanoFoto' src={srcFotografia} alt="perro" />
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3>{usuario}</h3>
                <p className=''>{estado == true ? "Online" : "Offline"}</p>
                <div className='d-flex'>
                    <p className='adorno'>{ultimoMsjRecibido}</p>
                </div>
            </div>
        </div>
    )
}

export default ListaUsuariosChat