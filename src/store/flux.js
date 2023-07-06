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
            currentUser: null,
            correo: '',
            nombre: '',
            password: '',
            esAdministrador: true,
            color: {

            }
        },
        actions: {
            handleChange: e => {
                const { name, value } = e.target;
                setStore({
                    [name]: value
                })
            },
            cleanContext: () => {
                setStore({ password: '' });
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
                    apiURL: `${apiURL}/api/formulario`,
                    options: {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(credentials)
                    }
                }

                // serviceLogin(data).then(respJson => {
                //     console.log(respJson);
                //     if (respJson.message) {
                //         toast(respJson.message, { type: toast.TYPE.ERROR });
                //         setStore({ password: '' });
                //     } else {
                //         setStore({ correo: '', password: '' });
                //         navigate('/formulario')
                //     }
                // });

                fetch(data.apiURL, data.options)
                    .then(response => response.json())
                    .then(respJson => {
                        console.log(respJson);
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
                            setStore({ correo: '', password: '', currentUser: respJson });
                            sessionStorage.setItem('currentUser', JSON.stringify(respJson));
                            navigate('/dashboard')
                        }
                    });

            }
        }
    }
}

export default getState;