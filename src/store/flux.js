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
            role: null
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
                        console.log(respJson.data.access_token);
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

            }
        }
    }
}

export default getState;