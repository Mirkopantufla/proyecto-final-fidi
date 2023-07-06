import React, { useContext, useEffect, useState } from 'react'
import "../estilos/Chat.css"
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdInsertEmoticon } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import ChatUsuario from '../componentes/chat/ChatUsuario'
import MensajesUsuarioChat from '../componentes/MensajesUsuarioChat'
import FichaContactoChat from '../componentes/FichaContactoChat'
import logoFidi from '../imagenes/logo1.png'
import { Link } from 'react-router-dom'
import { Context } from '../store/AppContext'

//---------------------------------------------------------------------------------------------------
//Lista de prueba para mapear Mensajes en el chat
//El chat se almacenara en la base de datos y debera ser traido desde allí
//Lo puse como Date por que de la DB vendra con formato timestamp (?)
const simulacionDatosChat = [
    {
        idUsuarioRemitente: 2,
        horaEnvio: new Date("08/05/2023 11:28:15 AM"),
        nombrePropMensaje: "Alejandro Miranda",
        mensaje: "Hola mundo"
    },
    {
        idUsuarioRemitente: 2,
        horaEnvio: new Date("08/05/2023 11:29:17 AM"),
        nombrePropMensaje: "Alejandro Miranda",
        mensaje: "K pedo wey"
    },
    {
        idUsuarioRemitente: 1,
        horaEnvio: new Date("08/05/2023 11:32:23 AM"),
        nombrePropMensaje: "Yo",
        mensaje: "Nada manito"
    },
    {
        idUsuarioRemitente: 2,
        horaEnvio: new Date("08/05/2023 11:34:54 AM"),
        nombrePropMensaje: "Alejandro Miranda",
        mensaje: "ya merito llegamos? ya merito llegamos? ya merito llegamos? ya merito llegamos?"
    },
    {
        idUsuarioRemitente: 1,
        horaEnvio: new Date("08/05/2023 11:40:34 AM"),
        nombrePropMensaje: "Yo",
        mensaje: "calla burro"
    },
    {
        idUsuarioRemitente: 1,
        horaEnvio: new Date("08/05/2023 11:33:34 AM"),
        nombrePropMensaje: "Yo",
        mensaje: "ultima posicion de los mensajes a las 11:33, probando el ultimo mensaje por fecha en la lista de Contactos"
    }
]

//---------------------------------------------------------------------------------------------------
//Lista de prueba para mapear Usuarios en el chat
//Deberan ser las personas que han hecho match las que se habilitaran para hablar
//El chat se almacenara en la base de datos y debera ser traido desde allí
const simulacionDatosUsuarios = [
    {
        usuario: "Alejandro Miranda",
        estado: false,
        ultimoMsjRecibido: "ola mundo",
        srcFotografia: "https://picsum.photos/id/237/200/200"
    },
    {
        usuario: "Rosa Deltransito",
        estado: false,
        ultimoMsjRecibido: "enseña bien oe",
        srcFotografia: "https://picsum.photos/id/238/200/200"
    },
    {
        usuario: "Armando Losas",
        estado: false,
        ultimoMsjRecibido: "paralelepipedo",
        srcFotografia: "https://picsum.photos/id/239/200/200"
    },
    {
        usuario: "Matias Pasten",
        estado: true,
        ultimoMsjRecibido: "tengo gatos",
        srcFotografia: "https://picsum.photos/id/240/200/200"
    }
];

//---------------------------------------------------------------------------------------------------
const Chat = () => {
    const [nombreContacto, setNombreContacto] = useState(""); //Estado que muestra el Nombre del contacto seleccionado en la parte superior (ficha)
    const [fotoContacto, setFotoContacto] = useState(""); //Estado que muestra la Foto del contacto seleccionado en la parte superior (ficha)
    const [chat, setChat] = useState([]); //Estado que modifica el contenido el chat (mensajes)
    const [mensaje, setMensaje] = useState(); //Estado que almacena todo lo escrito en el input del chat
    const { store, actions } = useContext(Context);

    const handleClickUsuario = (indicador) => {
        setNombreContacto(simulacionDatosUsuarios[indicador].usuario)
        setFotoContacto(simulacionDatosUsuarios[indicador].srcFotografia)
        setChat(simulacionDatosChat)
    }

    //Funcion para mostrar el ultimo mensaje recibido del historial del chat
    const ultimoMensaje = () => {
        let date = new Date("01/01/2000 00:00:01 AM");
        let ultimoMsj = "";
        simulacionDatosChat.forEach(element => {
            if (date < element.horaEnvio) {
                date = element.horaEnvio;
                ultimoMsj = element.mensaje;
            }
        });
        return ultimoMsj;
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3 text-center m-auto d-md-none d-lg-block">
                    <h2 className='ms-2'>Lista Contactos</h2>
                </div>
                <div className="col-md-3 col-lg-3 d-none d-md-block d-lg-none text-center p-5 m-3 border border-3 border-dark rounded-5"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#staticBackdrop"
                    aria-controls="staticBackdrop">
                    <h2 className='ms-2'>Lista Contactos</h2>
                </div>
                <div className="offcanvas offcanvas-start bg-warning"
                    tabIndex="-1"
                    id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">

                    {/*  */}
                    <div className="offcanvas-header bg-warning">
                        <h5 className="text-center" id="staticBackdropLabel">Lista de Contactos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        {
                            //Mapeo de los objetos contenidos en el array listaPruebaUsuarios
                            //Extraigo cada usuario y lo muestro en el chat, suponiendo que son los match 
                            simulacionDatosUsuarios.map((usuario, index) => {
                                return (
                                    <ChatUsuario
                                        key={index}
                                        usuario={usuario.usuario}
                                        estado={usuario.estado}
                                        ultimoMsjRecibido={ultimoMensaje()}
                                        srcFotografia={usuario.srcFotografia}
                                        funcionClick={() => handleClickUsuario(index)}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="col-md-8 offset-lg-0 col-lg-9">
                    <div className="row">
                        <FichaContactoChat nombreContacto={nombreContacto} fotoContacto={fotoContacto} />
                        <div className="col-lg-3 col-md-2 d-flex justify-content-end mt-5">
                            <div className="dropdown">
                                <button className="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Añadir a Favoritos</a></li>
                                    <li><a className="dropdown-item" href="#">Reportar</a></li>
                                </ul>
                            </div>
                            <Link to={"/explore"}>
                                <AiFillCloseCircle className='fs-1 text-dark ms-2 bg-light border border-dark rounded-circle' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Ocupo clase custom 'chat' para mantener la  altura del cuadro de mensaje*/}
            <div className="row px-3">
                <div className="col-3 text-center d-md-none d-lg-block">
                    {
                        //Mapeo de los objetos contenidos en el array listaPruebaUsuarios
                        //Extraigo cada usuario y lo muestro en el chat, suponiendo que son los match 
                        simulacionDatosUsuarios.map((usuario, index) => {
                            return (
                                <ChatUsuario
                                    key={index}
                                    usuario={usuario.usuario}
                                    estado={usuario.estado}
                                    ultimoMsjRecibido={ultimoMensaje()}
                                    srcFotografia={usuario.srcFotografia}
                                    funcionClick={() => handleClickUsuario(index)}
                                />
                            );
                        })
                    }
                </div>
                <div className="col-12 col-lg-9 bg-light rounded-3 estilo-chat">
                    {
                        //Mapeo de los objetos contenidos en el array simulacionDatosChat
                        //Extraigo cada usuario y lo muestro en el chat, suponiendo que son los match 
                        chat.map((mensaje, index) => {
                            return (
                                <MensajesUsuarioChat
                                    key={index}
                                    idUsuarioRemitente={mensaje.idUsuarioRemitente}
                                    horaEnvio={mensaje.horaEnvio.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                    nombrePropMensaje={mensaje.nombrePropMensaje}
                                    mensaje={mensaje.mensaje}
                                />
                            );
                        })
                    }
                </div>
            </div>
            <div className="row ps-3">
                <div className="col-lg-3 text-center d-md-none d-lg-block">
                    <img src={logoFidi} alt="logo Fidi" style={{ height: "40px" }} />
                </div>
                <div className="col-md-12 col-lg-9 d-flex mb-md-3 mt-md-3 mt-lg-3" style={{ margin: "-15px" }}>
                    <MdInsertEmoticon className='display-5 me-1 my-auto' />
                    <input className='form-control' type="text" onChange={(e) => setMensaje(e.target.value)} />
                    <button className='btn btn-dark ms-3'>Archivo</button>
                    <button className='btn btn-dark ms-3'>Audio</button>
                    <button className='btn btn-dark ms-3'>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Chat