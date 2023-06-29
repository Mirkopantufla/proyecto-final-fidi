import React from 'react'
import "../estilos/Chat.css"
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdInsertEmoticon } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import ListaUsuariosChat from '../componentes/ListaUsuariosChat'
import MensajesUsuarioChat from '../componentes/MensajesUsuarioChat'
import logoFidi from '../imagenes/logo1.png'

//---------------------------------------------------------------------------------------------------
//Lista de prueba para mapear Mensajes en el chat
//El chat se almacenara en la base de datos y debera ser traido desde allí
const simulacionDatosChat = [
    {
        idUsuarioRemitente: 2,
        horaEnvio: "11:25 AM",
        nombrePropMensaje: "Alejandro Miranda",
        mensaje: "Hola mundo"
    },
    {
        idUsuarioRemitente: 2,
        horaEnvio: "11:28 AM",
        nombrePropMensaje: "Alejandro Miranda",
        mensaje: "K pedo wey"
    },
    {
        idUsuarioRemitente: 1,
        horaEnvio: "11:32 AM",
        nombrePropMensaje: "Yo",
        mensaje: "Nada manito"
    },
    {
        idUsuarioRemitente: 2,
        horaEnvio: "11:50 AM",
        nombrePropMensaje: "Alejandro Miranda",
        mensaje: "ya merito llegamos? ya merito llegamos? ya merito llegamos? ya merito llegamos?"
    },
    {
        idUsuarioRemitente: 1,
        horaEnvio: "11:56 AM",
        nombrePropMensaje: "Yo",
        mensaje: "calla burro"
    }
]

//---------------------------------------------------------------------------------------------------
//Lista de prueba para mapear Usuarios en el chat
//Deberan ser las personas que han hecho match las que se habilitaran para hablar
//El chat se almacenara en la base de datos y debera ser traido desde allí
const simulacionDatosUsuarios = [
    {
        usuario: "Mirko Pasten",
        estado: false,
        ultimoMsjRecibido: "ola mundo",
        srcFotografia: "https://picsum.photos/id/237/120/120"
    },
    {
        usuario: "Rosa Deltransito",
        estado: false,
        ultimoMsjRecibido: "enseña bien oe",
        srcFotografia: "https://picsum.photos/id/238/120/120"
    },
    {
        usuario: "Armando Losas",
        estado: false,
        ultimoMsjRecibido: "paralelepipedo",
        srcFotografia: "https://picsum.photos/id/239/120/120"
    }
];

//---------------------------------------------------------------------------------------------------
const Chat = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-3 text-center m-auto">
                    <h2 className='ms-2'>Lista Contactos</h2>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 my-3">
                            <img className='border rounded-5' src="https://picsum.photos/id/237/150/150" alt="" />
                        </div>
                        <div className="col-lg-5 col-md-7 d-flex flex-column justify-content-center">
                            <h4>Nombre Contacto</h4>
                            <div className='d-flex'>
                                <button className='btn btn-dark'>interes</button>
                                <button className='btn btn-dark'>interes</button>
                                <button className='btn btn-dark'>interes</button>
                                <button className='btn btn-dark'>interes</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-2 mt-2 d-flex justify-content-end mt-5">
                            <div className="dropdown">
                                <button className="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Añadir a Favoritos</a></li>
                                    <li><a className="dropdown-item" href="#">Reportar</a></li>
                                </ul>
                            </div>
                            <AiFillCloseCircle className='fs-1 text-dark ms-2 bg-light border border-dark rounded-circle' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Ocupo clase custom 'chat' para mantener la  altura del cuadro de mensaje*/}
            <div className="row px-3">
                <div className="col-3 text-center">
                    {
                        //Mapeo de los objetos contenidos en el array listaPruebaUsuarios
                        //Extraigo cada usuario y lo muestro en el chat, suponiendo que son los match 
                        simulacionDatosUsuarios.map((usuario, index) => {
                            return (
                                <ListaUsuariosChat
                                    key={index}
                                    usuario={usuario.usuario}
                                    estado={usuario.estado}
                                    ultimoMsjRecibido={usuario.ultimoMsjRecibido}
                                    srcFotografia={usuario.srcFotografia}
                                />
                            );
                        })
                    }
                </div>
                <div className="col-9 bg-light rounded-4 estilo-chat">
                    {
                        //Mapeo de los objetos contenidos en el array simulacionDatosChat
                        //Extraigo cada usuario y lo muestro en el chat, suponiendo que son los match 
                        simulacionDatosChat.map((mensaje, index) => {
                            return (
                                <MensajesUsuarioChat
                                    key={index}
                                    idUsuarioRemitente={mensaje.idUsuarioRemitente}
                                    horaEnvio={mensaje.horaEnvio}
                                    nombrePropMensaje={mensaje.nombrePropMensaje}
                                    mensaje={mensaje.mensaje}
                                />
                            );
                        })
                    }

                </div>
            </div>
            <div className="row">
                <div className="col-3 text-center">
                    <img src={logoFidi} alt="logo Fidi" style={{ height: "40px" }} />
                </div>
                <div className="col-9 d-flex mt-lg-3" style={{ margin: "-15px" }}>
                    <MdInsertEmoticon className='fs-1 me-1' />
                    <input className='form-control' type="text" />
                    <button className='btn btn-dark ms-3'>Archivo</button>
                    <button className='btn btn-dark ms-3'>Audio</button>
                    <button className='btn btn-dark ms-3'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Chat