import { toast } from "react-toastify";

/**
 * { getStore, getActions, setStore }
 * 
 * getStore: funcion que devuelve el objeto store con todos los atributos alli definidos
 * getActions: funcion que devuelve el objecto actions con todas las funciones alli definidas
 * setStore: funcion que recibe un objeto el cual permite actualizar el objeto store
 * 
 */


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: 'http://127.0.0.1:5000',
            access_token: '',
            setIsLoading: true,
            currentUser: null,
            habilidades: null,
            intereses: null,
            id_usuario: null,
            correoLogin: '',
            passwordLogin: '',
            nombre: '',
            role: null,
            matches: null,
            receptor_id: null,
            notificaciones: null,
            settings: {
                actualPass: "",
                newPass: "",
                verifyPass: "",
                cambioImagen: null
            },
            new_user: {
                correo: '',
                nombre: '',
                password: ''
            },
            habilidadesCargadas: {
                todasHabilidades: [],
                categoriasHabilidades: [],
                formatoHabilidades: null
            }
        },
        actions: {
            handleChange: e => {
                const { name, value } = e.target;
                const { settings, new_user } = getStore();



                //Todos estos formateos son para mantener ordenada la vista del context
                //Formateo de la data de inicio de sesion
                if (name == 'correoLogin') {
                    setStore({ [name]: value })
                } else if (name == 'passwordLogin') {
                    setStore({ [name]: value })
                }

                //Formateo de nuevo Usuario y validacion de entrada
                if (name == 'correo') {
                    setStore({
                        new_user: {
                            [name]: value,
                            nombre: new_user.nombre,
                            password: new_user.password
                        }
                    })
                } else if (name == 'nombre') {
                    setStore({
                        new_user: {
                            correo: new_user.correo,
                            [name]: value,
                            password: new_user.password
                        }
                    })
                } else if (name == 'password') {
                    setStore({
                        new_user: {
                            correo: new_user.correo,
                            nombre: new_user.nombre,
                            [name]: value
                        }
                    })
                }

                //Formateo de settings
                if (name == 'actualPass') {
                    setStore({
                        settings: {
                            [name]: value,
                            newPass: settings.newPass,
                            verifyPass: settings.verifyPass,
                            cambioImagen: settings.cambioImagen
                        }
                    })
                } else if (name == 'newPass') {
                    setStore({
                        settings: {
                            actualPass: settings.actualPass,
                            [name]: value,
                            verifyPass: settings.verifyPass,
                            cambioImagen: settings.cambioImagen
                        }
                    })
                } else if (name == 'verifyPass') {
                    setStore({
                        settings: {
                            actualPass: settings.actualPass,
                            newPass: settings.newPass,
                            [name]: value,
                            cambioImagen: settings.cambioImagen
                        }
                    })
                } else if (name == 'cambioImagen') {
                    setStore({
                        settings: {
                            actualPass: settings.actualPass,
                            newPass: settings.newPass,
                            verifyPass: settings.verifyPass,
                            [name]: value
                        }
                    })
                }
            },
            // Esta funcion la cree para poder recortar unas cuantas lineas
            fetchData: (url, options = {}) => {

                return fetch(url, options);

            },
            cargarSesion: () => {
                const currentUser = sessionStorage.getItem('currentUser')
                const access_token = sessionStorage.getItem('access_token')
                const role = sessionStorage.getItem('role')
                const id_usuario = sessionStorage.getItem('id_usuario')
                const intereses = sessionStorage.getItem('intereses')
                const habilidades = sessionStorage.getItem('habilidades')
                const user = sessionStorage.getItem('user')

                if (currentUser) {
                    console.log('Si, hay data', JSON.parse(currentUser))
                    setStore({
                        currentUser: JSON.parse(currentUser),
                        access_token: JSON.parse(access_token),
                        role: JSON.parse(role),
                        id_usuario: JSON.parse(id_usuario),
                        intereses: JSON.parse(intereses),
                        habilidades: JSON.parse(habilidades)
                    })
                }
            },
            login: (e, navigate) => {
                e.preventDefault();
                const { correoLogin, passwordLogin, apiURL } = getStore();

                const credentials = {
                    correoLogin,
                    passwordLogin
                }

                const data = {
                    apiURL: `${apiURL}/api/loginform`,
                    options: {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    }
                }

                fetch(data.apiURL, data.options)
                    .then(response => response.json())
                    .then(respJson => {
                        if (respJson.message) {
                            toast.error(respJson.message);
                            setStore({ passwordLogin: '' });
                        } else if (respJson.correoLogin) {
                            toast(respJson.correoLogin, { type: toast.TYPE.WARNING });
                            setStore({ passwordLogin: '' });
                        } else if (respJson.passwordLogin) {
                            toast(respJson.passwordLogin, { type: toast.TYPE.WARNING });
                            setStore({ passwordLogin: '' });
                        } else {
                            if (respJson.data.access_token) {
                                setStore({
                                    correoLogin: '',
                                    passwordLogin: '',
                                    access_token: respJson.data.access_token,
                                    role: respJson.data.user.id_roles,
                                    id_usuario: respJson.data.user.id,
                                    currentUser: respJson
                                });
                                sessionStorage.setItem('currentUser', JSON.stringify(respJson));
                                sessionStorage.setItem('access_token', JSON.stringify(respJson.data.access_token));
                                sessionStorage.setItem('role', JSON.stringify(respJson.data.user.id_roles));
                                sessionStorage.setItem('id_usuario', JSON.stringify(respJson.data.user.id));
                                sessionStorage.setItem('user', JSON.stringify(respJson.data.user));

                                navigate('/profile')
                            }
                        }
                    });

            },
            cerrarSesion: (e, navigate) => {
                e.preventDefault()
                sessionStorage.clear()
                setStore({
                    currentUser: null,
                    habilidades: null,
                    intereses: null,
                    id_usuario: null
                })
                navigate('/loginform');
            },
            obtenerDatosUsuario: () => {
                const { apiURL, access_token } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/profile`,
                    options: {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                    })
                    .catch((error) => console.log(error));
            },
            obtenerNotificacionesUsuario: () => {
                const { apiURL, access_token } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/notificaciones/recibir/notificacion`,
                    options: {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({
                            notificaciones: data.notificaciones
                        })
                    })
                    .catch((error) => console.log(error));
            },
            obtenerHabilidadesUsuario: () => {
                const { apiURL, access_token } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/usuario/habilidades`,
                    options: {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        console.log(respJson)
                        setStore({
                            habilidades: respJson.data.habilidades,
                            intereses: respJson.data.intereses
                        });
                        sessionStorage.setItem('habilidades', JSON.stringify(respJson.data.habilidades));
                        sessionStorage.setItem('intereses', JSON.stringify(respJson.data.habilidades));
                    })
                    .catch((error) => console.log(error));

            },
            //Obtiene todas las habilidades presentes en la tabla Habilidad de base de datos
            obtenerHabilidades: () => {
                const { apiURL, access_token, habilidadesCargadas } = getStore();
                let arrayCategorias = []

                //Funcion para ordenar la informacion provista por la base de datos de la misma manera en la que se trabajaba
                //la informacion anteriormente
                const agruparHabilidadesPorCategoria = (payload) => {
                    const habilidadesPorCategoria = {};

                    for (let i = 0; i < payload.length; i++) {
                        const habilidad = payload[i];
                        const categoria = habilidad.categoria;

                        if (!habilidadesPorCategoria[categoria]) {
                            habilidadesPorCategoria[categoria] = [];
                        }

                        habilidadesPorCategoria[categoria].push(habilidad.descripcion);
                    }
                    return habilidadesPorCategoria;
                }

                const data = {
                    apiURL: `${apiURL}/api/habilidades`,
                    options: {
                        method: "GET",
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        },
                    },
                };

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        respJson.forEach(data => {
                            arrayCategorias.includes(data.categoria) ? null : arrayCategorias.push(data.categoria);
                        })
                        console.log(respJson)
                        console.log(arrayCategorias)
                        console.log(agruparHabilidadesPorCategoria(respJson))
                        setStore({
                            habilidadesCargadas: {
                                todasHabilidades: respJson,
                                categoriasHabilidades: arrayCategorias,
                                formatoHabilidades: agruparHabilidadesPorCategoria(respJson)
                            }
                        });
                    })
                    .catch((error) => console.log(error));
            },
            obtenerHabilidadesUsuarioMatch: (id_receptor) => {
                const { apiURL, access_token } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/match/habilidades/usuario/${id_receptor}`,
                    options: {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        console.log('Esta es la data con las habilidades', respJson)
                        console.log('Esta es el id del receptor', id_receptor)
                        setStore({
                            habilidadesUsuarioMatch: {
                                id_usuario_receptor: id_receptor,
                                habilidades: respJson.data.habilidades,
                                intereses: respJson.data.intereses
                            }
                        });
                    })
                    .catch((error) => console.log(error));

            },
            getMatches: () => {
                const { apiURL, access_token } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/listarUsuarios`,
                    options: {
                        method: "GET",
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        },
                    },
                };

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        console.log(respJson),
                            setStore({ matches: respJson });
                    })
                    .catch((error) => console.log(error));
            },
            cambiarPassword: (e) => {
                e.preventDefault()
                const { apiURL, id_usuario, access_token, settings: { actualPass, newPass, verifyPass } } = getStore();

                const datos = {
                    actualPass,
                    newPass,
                    verifyPass
                }

                const data = {
                    apiURL: `${apiURL}/api/settings/cambiarPassword/${id_usuario}`,
                    options: {
                        method: "POST",
                        body: JSON.stringify(datos),
                        headers: {
                            'Authorization': `Bearer ${access_token}`,
                            "Content-Type": "application/json"
                        },
                    },
                };

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        console.log(respJson)
                        toast.success(respJson.success);
                        respJson.success ?
                            setStore({
                                settings: {
                                    actualPass: "",
                                    newPass: "",
                                    verifyPass: "",
                                    cambioImagen: ""
                                }
                            })
                            :
                            toast.warn(respJson.message);
                    })
                    .catch((error) => console.log(error));

                e.target.reset()
            },
            // likeUser: (emisor_id, receptor_id) => {
            //     const { apiURL, access_token } = getStore();

            //     const data = {
            //         apiURL: `${apiURL}/api/like`,
            //         options: {
            //             method: "POST",
            //             headers: {
            //                 "Content-Type": "application/json",
            //                 'Authorization': `Bearer ${access_token}`

            //             },
            //             body: JSON.stringify({ emisor_id, receptor_id }),
            //         },
            //     };

            //     fetch(data.apiURL, data.options)
            //         .then((response) => response.json())
            //         .then((respJson) => {
            //             if (respJson.message === "Has dado un like") {
            //                 const existing_match = getStore().existing_match;

            //                 if (existing_match) {
            //                     existing_match.estado = 2;
            //                     setStore({ existing_match });
            //                 } else {
            //                     const new_match = {
            //                         id_usr_emisor: emisor_id,
            //                         id_usr_receptor: receptor_id,
            //                         estado: 1,
            //                     };
            //                     setStore({ new_match });
            //                 }

            //                 const match_log = {
            //                     id_match: existing_match?.id_match || new_match.id_match,
            //                     id_usr_emisor: emisor_id,
            //                     id_usr_receptor: receptor_id,
            //                     estado: new_match.estado,
            //                 };
            //                 setStore({ match_log });

            //                 toast(respJson.message, { type: toast.TYPE.SUCCESS });
            //             }
            //         });
            // },
            unlikeUser: (emisor_id, receptor_id) => {
                const { apiURL, access_token } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/match/unlike`,
                    options: {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Bearer ${access_token}`
                        },
                        body: JSON.stringify({ emisor_id, receptor_id }),
                    },
                };

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        if (respJson.message === "Has eliminado el like") {
                            const existing_match = getStore().existing_match;

                            if (existing_match) {
                                existing_match.estado = 1;
                                setStore({ existing_match });
                            }

                            toast(respJson.message, { type: toast.TYPE.SUCCESS });
                        }
                    });
            }
        }
    }
}

export default getState;