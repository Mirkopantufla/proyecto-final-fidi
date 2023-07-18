import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/AppContext";
import { ToastContainer, toast } from 'react-toastify';
import '../../estilos/config/Interest.css'

const Interests = () => {
  const [modificarHabilidades, setModificarHabilidades] = useState([]);
  const [modificarIntereses, setModificarIntereses] = useState([]);

  const [habilidadesError, setHabilidadesError] = useState(false); //Retorna true si hay algun error al seleccionar las habilidades
  const [interesesError, setInteresesError] = useState(false);
  const { store, actions } = useContext(Context);
  const [descripcion, setDescripcion] = useState('');

  let aux = [];
  let habilidadActual = [];
  let nuevaHabilidad = [];
  let interesActual = [];
  let nuevoInteres = [];
  let incluidas = [];
  let eliminadas = [];
  let nuevas = [];

  useEffect(() => {

    setDescripcion(store.currentUser.data.user.descripcion)

    store.habilidades.forEach(element => {
      aux.push(element.descripcion)
    });
    setModificarHabilidades(aux)

    aux = []

    store.intereses.forEach(element => {
      aux.push(element.descripcion)
    });
    setModificarIntereses(aux)

    aux = []

  }, [])

  //Funcion para cargar las habilidades del usuario al abrir la opcion de modificar habilidades e intereses
  const cargarHabilidadesUsuario = (array) => {
    aux = []
    array.forEach(element => {
      aux.push(element.descripcion)
    });
    return aux;
  }

  //--------------------------------------------------------------------------------------------------------
  //Creo una funcion para recibir el nombre de la habilidad y conocer el id dentro de la DB de esta 
  const ordenarInformacion = (estado) => {
    aux = [];
    for (let i = 0; i < estado.length; i++) {
      for (let j = 0; j < store?.habilidadesCargadas?.todasHabilidades?.length; j++) {
        estado[i] == store.habilidadesCargadas.todasHabilidades[j].descripcion ? aux.push(store.habilidadesCargadas.todasHabilidades[j].id) : null;
      }
    };

    return aux;
  }


  const handleHabilidadClick = (habilidad) => {
    if (modificarHabilidades.includes(habilidad)) {
      setModificarHabilidades(modificarHabilidades.filter((item) => item !== habilidad));
    } else {
      setModificarHabilidades([...modificarHabilidades, habilidad]);
    }
  };

  const handleInteresClick = (interes) => {
    if (modificarIntereses.includes(interes)) {
      setModificarIntereses(modificarIntereses.filter((item) => item !== interes));
    } else {
      setModificarIntereses([...modificarIntereses, interes]);
    }
  };

  const handleEliminarHabilidad = (habilidad) => {
    setModificarHabilidades(modificarHabilidades.filter((item) => item !== habilidad));
  };

  const handleEliminarInteres = (interes) => {
    setModificarIntereses(modificarIntereses.filter((item) => item !== interes));
  };

  const habilidadesNuevasEliminadas = (actual, nuevo) => {

    for (let i = 0; i < actual.length; i++) {
      if (nuevo.includes(actual[i])) {
        incluidas.push(actual[i])
      } else {
        eliminadas.push(actual[i])
      }
    }

    // console.log('Incluidas:', incluidas);
    // console.log('Eliminadas:', eliminadas);

    //Con este loop guardo las habilidades nuevas
    for (let i = 0; i < nuevo.length; i++) {
      if (nuevo.includes(incluidas[i])) {

      } else {
        nuevas.push(nuevo[i])
      }
    }

    // console.log('Nuevas:', nuevas);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    let errorPoint = 0;

    if (modificarHabilidades.length < 2 || modificarHabilidades.length > 10) {
      setHabilidadesError(true);
      return;
    } else {
      setHabilidadesError(false);
    }

    if (modificarIntereses.length < 2 || modificarIntereses.length > 10) {
      setInteresesError(true);
      return;
    } else {
      setInteresesError(false);
    }

    if (hayHabilidadesRepetidas()) {
      setHabilidadesError(true);
      setInteresesError(true);
      return;
    } else {
      setHabilidadesError(false);
      setInteresesError(false);
    }

    habilidadActual = ordenarInformacion(cargarHabilidadesUsuario(store.habilidades))
    interesActual = ordenarInformacion(cargarHabilidadesUsuario(store.intereses))

    nuevaHabilidad = ordenarInformacion(modificarHabilidades)
    nuevoInteres = ordenarInformacion(modificarIntereses)

    //Esta funcion me trae, de la comparacion de habilidadActual y nuevaHabilidad
    //Los arrays [nuevas] con las habilidades nuevas y [eliminadas] con las habilidades eliminadas.
    habilidadesNuevasEliminadas(habilidadActual, nuevaHabilidad)

    //Pregunto si NO hay habilidades en los arrays [nuevas] y [eliminadas]
    //Si NO hay, suma un punto a errorPoint
    if (eliminadas.length == 0 && nuevas.length == 0) {
      errorPoint += 1;
      console.log('No has modificado habilidades')
    } else {
      //Si HAY, añado las habilidades nuevas y eliminadas al formulario
      form.append('habilidades_eliminadas', eliminadas)
      form.append('habilidades_agregadas', nuevas)
    }

    //Se liberan despues de guardarlas las habilidades en el form
    incluidas = [];
    eliminadas = [];
    nuevas = [];

    //Esta funcion me trae, de la comparacion de interesActual y nuevoInteres
    //Los arrays [nuevas] con los intereses nuevos y [eliminadas] con los intereses eliminados.
    habilidadesNuevasEliminadas(interesActual, nuevoInteres)

    //Pregunto si NO hay Intereses en los arrays [nuevas] y [eliminadas]
    if (eliminadas.length == 0 && nuevas.length == 0) {
      //Si NO hay, suma un punto a errorPoint
      errorPoint += 1;
      console.log('No has modificado intereses')
    } else {
      //Si HAY, añado los intereses nuevos y eliminados al formulario
      form.append('intereses_eliminados', eliminadas)
      form.append('intereses_agregados', nuevas)
    }

    //Se liberan despues de guardarlas las intereses en el form
    incluidas = [];
    eliminadas = [];
    nuevas = [];

    //Pregunto si se ha modificado el campo descripción
    if (descripcion == store.currentUser.data.user.descripcion) {
      errorPoint += 1
    } else {
      form.append('descripcion', descripcion)
    }


    //Aqui verifico, si tengo 3 errorPoints o más se termina la funcion
    if (errorPoint >= 3) {
      errorPoint = 0;
      toast.warn('No has modificado nada');
      return;
    }

    const dataPost = {
      apiURL: `${store.apiURL}/api/settings/modificarHabilidad/${store.id_usuario}/agregar`,
      options: {
        method: "POST",
        body: form,
        headers: {
          "Authorization": `Bearer ${store.access_token}`
        },
      },
    }

    const dataDelete = {
      apiURL: `${store.apiURL}/api/settings/modificarHabilidad/${store.id_usuario}/eliminar`,
      options: {
        method: "DELETE",
        body: form,
        headers: {
          "Authorization": `Bearer ${store.access_token}`
        },
      },
    }

    fetch(dataDelete.apiURL, dataDelete.options)
      .then(response => response.json())
      .then(data => {
        toast.success(data.success);
        toast.warn(data.warning);
      })
      .catch((error) => console.log(error));

    //--------------------------------------------------------------------------------------------------------
    //Hago el fetch a la api/formulario con el metodo POST para subir el usuario a la base de datos, apretando el boton
    //de registrarse, de momento pasamos email, nombre, password y foto.
    fetch(dataPost.apiURL, dataPost.options)
      .then(response => response.json())
      .then(data => {
        toast.success(data.success);
        toast.warn(data.warning);
      })
      .catch((error) => console.log(error));

    //Libero las variables
    errorPoint = 0;
    incluidas = [];
    eliminadas = [];
    nuevas = [];
    habilidadActual = [];
    nuevaHabilidad = [];
    interesActual = [];
    nuevoInteres = [];
  };

  const hayHabilidadesRepetidas = () => {
    const habilidadesSeleccionadas = [...modificarHabilidades, ...modificarIntereses];
    const uniqueHabilidades = new Set(habilidadesSeleccionadas);
    return habilidadesSeleccionadas.length !== uniqueHabilidades.size;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8 col-lg-12">
                <h2>Modificar Habilidades</h2>
                <div className="form-group p-3 border border-1 rounded border-dark">
                  <h5 className="text-dark">
                    Selecciona lo que puedes enseñar:
                  </h5>
                  <hr />
                  <div className="flex-wrap custom-scrollbar" style={{ maxHeight: '200px' }}>
                    {
                      store.habilidadesCargadas.categoriasHabilidades ?
                        store.habilidadesCargadas.categoriasHabilidades.map((principal, index) => (
                          <div className="" key={index}>
                            <h5 className="py-1 bg-warning rounded">
                              <b>{principal}</b>
                            </h5>
                            {store.habilidadesCargadas.formatoHabilidades[principal].map((habilidad, index) => (
                              <div className="flex-wrap d-inline p-1">
                                <button
                                  key={index}
                                  type="button"
                                  className={`btn btn-md mb-2 ${modificarHabilidades.includes(habilidad) ? 'btn-secondary' : 'btn-primary'
                                    }`}
                                  style={{ backgroundColor: modificarHabilidades.includes(habilidad) ? '#F745AE' : '#0CD5A9' }}
                                  onClick={() => handleHabilidadClick(habilidad)}
                                >
                                  {habilidad}
                                </button>
                              </div>
                            ))}
                          </div>
                        ))
                        : null
                    }
                  </div>
                  {habilidadesError && <p className="text-danger">Debes seleccionar entre 2 y 10 habilidades sin repetir.</p>}
                </div>
                <div className="mt-2 p-2 border border-1 rounded border-dark">
                  <h5 className={modificarHabilidades && modificarHabilidades.length < 2 || modificarHabilidades.length > 10 ? 'text-danger' : ''}>
                    Habilidades seleccionadas: {modificarHabilidades ? modificarHabilidades.length : null}
                  </h5>
                  <hr />
                  <div className="d-flex flex-wrap justify-content-center">
                    {
                      modificarHabilidades ?
                        modificarHabilidades.map((habilidad, index) => (
                          <button
                            key={index}
                            type="button"
                            className="btn btn-primary btn-md m-1"
                            style={{ backgroundColor: '#F745AE' }}
                            onClick={() => handleEliminarHabilidad(habilidad)}
                          >
                            {habilidad}
                          </button>
                        ))
                        :
                        null
                    }
                  </div>
                </div>
              </div>
              <hr className="my-3 custom-hr" />
              <div className="col-8 col-lg-12">
                <h2>Modificar Intereses</h2>
                <div className="form-group p-3 border border-1 rounded border-dark">
                  <h5 className="text-dark">
                    Selecciona lo que te gustaría aprender:
                  </h5>
                  <hr />
                  <div className="flex-wrap custom-scrollbar" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {
                      store.habilidadesCargadas.categoriasHabilidades ?
                        store.habilidadesCargadas.categoriasHabilidades.map((principal, index) => (
                          <div key={index}>
                            <h5 className="py-1 bg-warning rounded">
                              <b>{principal}</b>
                            </h5>
                            {store.habilidadesCargadas.formatoHabilidades[principal].map((interes, index) => (
                              <div className="flex-wrap d-inline p-1">
                                <button
                                  key={index}
                                  type="button"
                                  className={`btn btn-md mb-2 ${modificarIntereses.includes(interes) ? 'btn-secondary' : 'btn-primary'
                                    }`}
                                  style={{ backgroundColor: modificarIntereses.includes(interes) ? '#F745AE' : '#0CD5A9' }}
                                  onClick={() => handleInteresClick(interes)}
                                >
                                  {interes}
                                </button>
                              </div>
                            ))}
                          </div>
                        ))
                        :
                        null
                    }
                  </div>
                  {interesesError && <p className="text-danger">Debes seleccionar entre 2 y 10 intereses sin repetir.</p>}
                </div>
                <div className="mt-4 p-2 border border-1 rounded border-dark">
                  <h5 className={modificarIntereses && modificarIntereses.length < 2 || modificarIntereses.length > 10 ? 'text-danger' : ''}>
                    Intereses seleccionados: {modificarIntereses ? modificarIntereses.length : null}
                  </h5>
                  <hr />
                  <div className="d-flex flex-wrap justify-content-center">
                    {
                      modificarIntereses ?
                        modificarIntereses.map((interes, index) => (
                          <button
                            key={index}
                            type="button"
                            className="btn btn-primary btn-md m-1"
                            style={{ backgroundColor: '#F745AE' }}
                            onClick={() => handleEliminarInteres(interes)}
                          >
                            {interes}
                          </button>
                        ))
                        :
                        null
                    }
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3 custom-hr" />
            <h2>Modificar Descripcion</h2>
            <div className="form-group mt-4">
              <label htmlFor="biografia" className="text-dark fs-5">
                Puedes modificar tu descripcion: (máximo 500 caracteres)
              </label>
              <textarea
                id="biografia"
                className="form-control"
                maxLength="500"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion ? descripcion : ""}
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary text-light mt-4">
              Aceptar Modificaciones
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};


export default Interests;
