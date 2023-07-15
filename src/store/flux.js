import { toast } from "react-toastify";
import { serviceLogin } from "../services/auth.services"

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
            currentUser: null,
            id_usuario: null,
            correo: '',
            nombre: '',
            password: '',
            role: null,
            matches: null,
            receptor_id:null,
        },
        actions: {
            handleChange: e => {
                const { name, value } = e.target;
                setStore({
                    [name]: value
                })
            },
            // Esta funcion la cree para poder recortar unas cuantas lineas
            fetchData: (url, options = {}) => {

                return fetch(url, options);

            },
            login: (e, navigate) => {
                e.preventDefault();
                const { correo, password, apiURL } = getStore();

                const credentials = {
                    correo,
                    password
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
                            toast(respJson.message, { type: toast.TYPE.ERROR });
                            setStore({ password: '' });
                        } else if (respJson.correo) {
                            toast(respJson.correo, { type: toast.TYPE.WARNING });
                            setStore({ password: '' });
                        } else if (respJson.password) {
                            toast(respJson.password, { type: toast.TYPE.WARNING });
                            setStore({ password: '' });
                        } else {
                            setStore({
                                correo: '',
                                password: '',
                                access_token: respJson.data.access_token,
                                role: respJson.data.user.id_roles,
                                id_usuario: respJson.data.user.id,
                                currentUser: respJson
                            });
                            sessionStorage.setItem('currentUser', JSON.stringify(respJson));
                            navigate('/profile')
                        }
                    });

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

            },
            likeUser: (emisor_id, receptor_id) => {
                const { apiURL } = getStore();

                const data = {
                    apiURL: `${apiURL}/api/GuardarMatch`,
                    options: {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Authorization': `Bearer ${access_token}`

                        },
                        body: JSON.stringify({ emisor_id, receptor_id }),
                    },
                };

                fetch(data.apiURL, data.options)
                    .then((response) => response.json())
                    .then((respJson) => {
                        if (respJson.message === "Has dado un like") {
                            const existing_match = getStore().existing_match;

                            if (existing_match) {
                                existing_match.estado = 2;
                                setStore({ existing_match });
                            } else {
                                const new_match = {
                                    id_usr_emisor: emisor_id,
                                    id_usr_receptor: receptor_id,
                                    estado: 1,
                                };
                                setStore({ new_match });
                            }

                            const match_log = {
                                id_match: existing_match?.id_match || new_match.id_match,
                                id_usr_emisor: emisor_id,
                                id_usr_receptor: receptor_id,
                                estado: new_match.estado,
                            };
                            setStore({ match_log });

                            toast(respJson.message, { type: toast.TYPE.SUCCESS });
                        }
                    });
            },
            unlikeUser: (emisor_id, receptor_id) => {
                const { apiURL } = getStore();

                const data = {
                    apiURL: `${apiURL}/match/unlike`,
                    options: {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
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