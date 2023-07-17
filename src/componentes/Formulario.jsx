import React, { useContext, useEffect, useState } from 'react';
import logoImage from "../logo1.png";
import { Context } from '../store/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import { IoChevronBackCircleSharp } from 'react-icons/io5'
import '../estilos/Formulario.css'

const Formulario = () => {
  const [habilidades, setHabilidades] = useState([]);
  const [intereses, setIntereses] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [habilidadesError, setHabilidadesError] = useState(false);
  const [interesesError, setInteresesError] = useState(false);
  const { store, actions } = useContext(Context);
  let aux = [];
  let habilidadesOrdenadas = []
  let interesesOrdenadas = []

  const handleHabilidadClick = (habilidad) => {
    if (habilidades.includes(habilidad)) {
      setHabilidades(habilidades.filter((item) => item !== habilidad));
    } else {
      setHabilidades([...habilidades, habilidad]);
    }
  };

  const handleInteresClick = (interes) => {
    if (intereses.includes(interes)) {
      setIntereses(intereses.filter((item) => item !== interes));
    } else {
      setIntereses([...intereses, interes]);
    }
  };

  const handleEliminarHabilidad = (habilidad) => {
    setHabilidades(habilidades.filter((item) => item !== habilidad));
  };

  const handleEliminarInteres = (interes) => {
    setIntereses(intereses.filter((item) => item !== interes));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (habilidades.length < 2 || habilidades.length > 10) {
      setHabilidadesError(true);
      return;
    } else {
      setHabilidadesError(false);
    }

    if (intereses.length < 2 || intereses.length > 10) {
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

    // Esto sirve para ver los datos que vienen por cada campo requerido

    console.log('Correo:', store.correo);
    console.log('Nombre:', store.nombre);
    console.log('Habilidades:', habilidades);
    console.log('Intereses:', intereses);
    console.log('Descripcion:', descripcion);
    console.log('Foto de perfil:', fotoPerfil);

    //--------------------------------------------------------------------------------------------------------
    //Creo una funcion para recibir el nombre de la habilidad y conocer el id dentro de la DB de esta 
    const ordenarInformacion = (estado) => {
      aux = [];
      for (let i = 0; i < estado.length; i++) {
        for (let j = 0; j < store.habilidadesCargadas.todasHabilidades.length; j++) {
          estado[i] == store.habilidadesCargadas.todasHabilidades[j].descripcion ? aux.push(store.habilidadesCargadas.todasHabilidades[j].id) : null;
        }
      };

      return aux;
    }

    //--------------------------------------------------------------------------------------------------------
    //Creo un formulario para enviar la informacion al back, rescatada de los campos y del context


    habilidadesOrdenadas = [...ordenarInformacion(habilidades)]

    interesesOrdenadas = [...ordenarInformacion(intereses)]

    console.log(habilidadesOrdenadas)
    console.log(habilidades)
    console.log('-------------------------------------')
    console.log(interesesOrdenadas)
    console.log(intereses)

    const form = new FormData();
    form.append('correo', store.new_user.correo)
    form.append('nombre', store.new_user.nombre)
    form.append('password', store.new_user.password)
    form.append('habilidades', habilidadesOrdenadas)
    form.append('intereses', interesesOrdenadas)
    form.append('descripcion', descripcion)
    form.append('imagen', fotoPerfil)

    //--------------------------------------------------------------------------------------------------------
    //Defino las opciones con las cuales enviare el formulario definido por el body
    const options = {
      method: 'POST',
      body: form
    }

    //--------------------------------------------------------------------------------------------------------
    //Hago el fetch a la api/formulario con el metodo POST para subir el usuario a la base de datos, apretando el boton
    //de registrarse, de momento pasamos email, nombre, password y foto.
    actions.fetchData(`${store.apiURL}/api/formulario`, options)
      .then(response => response.json())
      .then(data => {
        toast.success(data.success);
        toast.warn(data.advertencia);
        setHabilidades([]);
        setIntereses([]);
        setDescripcion('');
      })
      .catch((error) => console.log(error));


  };

  const hayHabilidadesRepetidas = () => {
    const habilidadesSeleccionadas = [...habilidades, ...intereses];
    const uniqueHabilidades = new Set(habilidadesSeleccionadas);
    return habilidadesSeleccionadas.length !== uniqueHabilidades.size;
  };

  return (
    <div className="container">
      <div className="row justify-content-center p-4 custom-bg rounded-2 mt-5">
        <div className="col-md-12 d-flex justify-content-start">
          <IoChevronBackCircleSharp className='display-5 icono-atras' onClick={() => window.history.back()} />
        </div>
        <div className="col-md-8">
          <h3 className='titulos text-center'>!Completa el siguiente formulario para encontrar el Match ideal!</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 text-center">
                <div className="form-group">
                  <label htmlFor="habilidades" className="text-dark">
                    Selecciona lo que puedes enseñar:
                  </label>
                  <div className="d-flex flex-wrap" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {
                      store.habilidadesCargadas.categoriasHabilidades ?
                        store.habilidadesCargadas.categoriasHabilidades.map((principal) => (
                          <div key={principal} className="m-1">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                              style={{ backgroundColor: '#0CD5A9' }}
                              disabled
                            >
                              {principal}
                            </button>
                            {store.habilidadesCargadas.formatoHabilidades[principal].map((habilidad) => (
                              <button
                                key={habilidad}
                                type="button"
                                className={`btn btn-sm m-1 ${habilidades.includes(habilidad) ? 'btn-secondary' : 'btn-primary'
                                  }`}
                                style={{ backgroundColor: habilidades.includes(habilidad) ? '#F745AE' : '#0CD5A9' }}
                                onClick={() => handleHabilidadClick(habilidad)}
                              >
                                {habilidad}
                              </button>
                            ))}
                          </div>
                        ))
                        : null
                    }
                  </div>
                  {habilidadesError && <p className="text-danger">Debes seleccionar entre 2 y 10 habilidades sin repetir.</p>}
                </div>
                <div className="mt-4">
                  <h5>Habilidades seleccionadas:</h5>
                  <div className="d-flex flex-wrap">
                    {habilidades.map((habilidad) => (
                      <button
                        key={habilidad}
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        style={{ backgroundColor: '#F745AE' }}
                        onClick={() => handleEliminarHabilidad(habilidad)}
                      >
                        {habilidad}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-center">
                <div className="form-group">
                  <label htmlFor="intereses" className="text-dark">
                    Selecciona lo que te gustaría aprender:
                  </label>
                  <div className="d-flex flex-wrap" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {
                      store.habilidadesCargadas.categoriasHabilidades ?
                        store.habilidadesCargadas.categoriasHabilidades.map((principal) => (
                          <div key={principal} className="m-1">
                            <div
                              className="btn btn-primary btn-sm"
                              style={{ backgroundColor: '#0CD5A9' }}
                              disabled
                            >
                              {principal}
                            </div>
                            {store.habilidadesCargadas.formatoHabilidades[principal].map((interes) => (
                              <button
                                key={interes}
                                type="button"
                                className={`btn btn-sm m-1 ${intereses.includes(interes) ? 'btn-secondary' : 'btn-primary'
                                  }`}
                                style={{ backgroundColor: intereses.includes(interes) ? '#F745AE' : '#0CD5A9' }}
                                onClick={() => handleInteresClick(interes)}
                              >
                                {interes}
                              </button>
                            ))}
                          </div>
                        ))
                        :
                        null
                    }
                  </div>
                  {interesesError && <p className="text-danger">Debes seleccionar entre 2 y 10 intereses sin repetir.</p>}
                </div>
                <div className="mt-4">
                  <h5>Intereses seleccionados:</h5>
                  <div className="d-flex flex-wrap">
                    {intereses.map((interes) => (
                      <button
                        key={interes}
                        type="button"
                        className="btn btn-primary btn-sm m-1"
                        style={{ backgroundColor: '#F745AE' }}
                        onClick={() => handleEliminarInteres(interes)}
                      >
                        {interes}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group mt-4 text-center">
              <label htmlFor="biografia" className="fs-5 text-dark mb-2">
                Cuéntanos un poco sobre ti: (máximo 500 caracteres)
              </label>
              <textarea
                id="biografia"
                className="form-control"
                maxLength="500"
                onChange={(e) => setDescripcion(e.target.value)}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group mt-4 text-center fs-5">
              <label htmlFor="fotoPerfil" className="text-dark">
                Sube tu foto de perfil:
              </label>
              <br />
              <br />
              <input
                type="file"
                id="fotoPerfil"
                className="form-control"
                accept="image/*"
                onChange={(e) => setFotoPerfil(e.target.files[0])}
              />
              {
                fotoPerfil ? <img className='w-50 mt-4 border border-3 rounded-3 border-dark' src={URL.createObjectURL(fotoPerfil)} alt="" /> : null
              }
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="btn btn-dark mt-4">
                Registrarme
              </button>
            </div>

          </form>
        </div>
      </div>
      <div className="logo-container">

        <img
          src={logoImage}
          alt="Logo"
          width="140"
          height="60"
          className="logo"
        />
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

export default Formulario;
