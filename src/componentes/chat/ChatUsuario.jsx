import React from 'react'
import '../../estilos/ChatUsuario.css'


const ChatUsuario = ({ usuario, estado, ultimoMsjRecibido, srcFotografia, funcionClick }) => {

    return (
        <div className='d-flex border-top border-dark py-2 chatHover' onClick={funcionClick}>
            <div className='col-md-5 col-lg-4 col-xl-4'>
                <img className='me-4 rounded-circle p-2 tamanoFoto' src={srcFotografia} alt="" />
            </div>
            <div className='col-md-6 offset-md-1 col-lg-6 offset-lg-2 col-xl-7 offset-xl-1 d-flex flex-column justify-content-center align-items-center'>
                <h5>{usuario}</h5>
                <p className=''>{estado == true ? "Online" : "Offline"}</p>
                <div className='d-flex'>
                    <p className='adorno'>{ultimoMsjRecibido}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatUsuario