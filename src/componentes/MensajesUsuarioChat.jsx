import React from 'react'

const MensajesUsuarioChat = ({ horaEnvio, nombrePropMensaje, mensaje }) => {

    return (
        <div className='row mt-4 mx-2'>
            <div className='col-4'>
                {mensaje}
            </div>
            <div className='col-3'>
                <span>{horaEnvio}</span>
            </div>
        </div>
    )
}

export default MensajesUsuarioChat