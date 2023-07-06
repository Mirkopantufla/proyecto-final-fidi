import React from 'react'
import '../estilos/MensajesUsuarioChat.css'

const MensajesUsuarioChat = ({ horaEnvio, nombrePropMensaje, mensaje, idUsuarioRemitente }) => {
    const generarNombre = () => {

    }

    return (
        <div className='row mt-3 mx-2'>
            {
                //Pregunto si el usuario Emisor es igual a 1?
                idUsuarioRemitente == 1 ?
                    <div className='col-md-5 offset-md-7 col-lg-5 offset-lg-7 p-2 d-flex flex-column mensaje-propio'>
                        <div className="d-flex justify-content-between">
                            <span><b>{nombrePropMensaje}</b></span>
                            <span><b>{horaEnvio}</b></span>
                        </div>
                        <span className='fs-5'>{mensaje}</span>
                    </div>
                    :
                    <div className='col-md-5 col-lg-5 p-2 d-flex flex-column mensaje-chat'>
                        <div className="d-flex justify-content-between">
                            <span><b>{nombrePropMensaje}</b></span>
                            <span><b>{horaEnvio}</b></span>
                        </div>
                        <span className='fs-5'>{mensaje}</span>
                    </div>
            }
        </div>
    )
}

export default MensajesUsuarioChat