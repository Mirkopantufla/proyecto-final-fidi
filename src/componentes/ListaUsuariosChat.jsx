import React from 'react'
import { IoReturnUpBackSharp } from 'react-icons/io5'
import '../estilos/ListaUsuariosChat.css'


const ListaUsuariosChat = ({ usuario, estado, ultimoMsjRecibido, srcFotografia }) => {
    return (
        <div className='d-flex border-top border-dark mb-2 chatHover'>
            <img className='me-4 rounded-circle p-2' src={srcFotografia} alt="perro" />
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className=''>{usuario}</h3>
                <p className=''>{estado == true ? "Online" : "Offline"}</p>
                <div className='d-flex'>
                    <IoReturnUpBackSharp className='me-2 fs-4' />
                    <p>{ultimoMsjRecibido}</p>
                </div>
            </div>
        </div>
    )
}

export default ListaUsuariosChat