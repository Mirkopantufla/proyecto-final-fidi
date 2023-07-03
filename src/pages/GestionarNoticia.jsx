import React from 'react'
import '../estilos/GestionarNoticia.css'
import { Link } from 'react-router-dom'

const GestionarNoticia = () => {

    const handleAgregar = () => {
        console.log("Agregar")
    }

    const handleModificar = () => {
        console.log("Modificar")
    }

    const handleEliminar = () => {
        console.log("Eliminar")
    }

    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-4'>Gestion de noticias</h1>
            <div className="row d-flex justify-content-around">
                <Link to={"/noticias/agregar"} className="col-3 text-center border border-3 border-dark rounded-4 mt-5 p-3 botonNoticia">
                    <h2>Agregar Noticia</h2>
                    <p className='fs-4 text-start'>Podras agregar una noticia especificando el <b>titulo</b>, una <b>foto</b> y una <b>descripción</b> para esta</p>
                </Link>
                <Link to={"/noticias/modificar"} className="col-3 text-center border border-3 border-dark rounded-4 mt-5 p-3 botonNoticia">
                    <h2 className='text-center'>Modificar Noticia</h2>
                    <p className='fs-4 text-start'>Podras <b>buscar</b> y <b>modificar</b> cualquier aspecto de una noticia.</p>
                </Link>
                <Link to={"/noticias/eliminar"} className="col-3 text-center border border-3 border-dark rounded-4 mt-5 p-3 botonNoticia">
                    <h2 className='text-center'>Eliminar Noticia</h2>
                    <p className='fs-4'>Podras <b>buscar</b> y <b>eliminar</b> la noticia</p>
                </Link>
            </div>
            <div className="row">

            </div>
        </div>
    )
}

export default GestionarNoticia