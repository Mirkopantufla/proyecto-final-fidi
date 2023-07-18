import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Context } from '../../store/AppContext';

const EliminarUsuario = () => {

    const { store, actions } = useContext(Context);

    const handleEliminarNoticia = (habilidad) => {
        setHabilidades(habilidades.filter((item) => item !== habilidad));
    };


    return (
        <div className='container-fluid'>
            <h1 className='text-center my-5'>
                Elimina una noticia
            </h1>
            <div className="row">
                <div className="offset-2 col-8 border border-dark">
                    sadf
                </div>
            </div>
        </div>
    )
}

export default EliminarUsuario