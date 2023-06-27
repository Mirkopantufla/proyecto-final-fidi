import React from 'react'
import "../estilos/Chat.css"
import { AiFillCloseCircle } from 'react-icons/ai'

const Chat = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-3 border">
                    <h2 className='ms-2'>Lista Contactos</h2>
                </div>
                <div className="col-9 border">
                    <div className="row">
                        <div className="col-2">
                            <img className='border rounded-5' src="https://picsum.photos/id/237/200/200" alt="" />
                        </div>
                        <div className="col-xl-6 ms-5">
                            <h4>Nombre Contacto</h4>
                            <button className='btn btn-dark'>interes</button>
                            <button className='btn btn-dark'>interes</button>
                            <button className='btn btn-dark'>interes</button>
                            <button className='btn btn-dark'>interes</button>
                        </div>
                        <div className="col-3 mt-2 d-flex justify-content-end">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <AiFillCloseCircle className='fs-2 text-dark mt-1 ms-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat