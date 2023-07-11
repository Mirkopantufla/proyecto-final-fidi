import React, { useContext, useEffect, useState } from 'react';
import logoImage from "../logo1.png";
import { Context } from '../store/AppContext';
import { ToastContainer, toast } from 'react-toastify';

const Formulario = () => {
  const [habilidades, setHabilidades] = useState([]);
  const [intereses, setIntereses] = useState([]);
  const [aprendizaje, setAprendizaje] = useState('');
  const [biografia, setBiografia] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [habilidadesError, setHabilidadesError] = useState(false);
  const [interesesError, setInteresesError] = useState(false);
  const { store, actions } = useContext(Context);
  const [habilidadesDB, setHabilidadesDB] = useState([]);
  const [categoriasHabilidades, setCategoriasHabilidades] = useState([]);
  const [habilidadesIntereses, setHabilidadesIntereses] = useState([]);
  let aux = [];
  let habilidadesOrdenadas = []
  let interesesOrdenadas = []

  //Use effect para traer la data apenas se cargue el componente
  useEffect(() => {
    obtenerHabilidades()
  }, [])

  //--------------------------------------------------------------------------------------------------------
  //Funcion para traer la habilidades en la base de datos, se conecta con la API y extrae cada una de ellas
  //estas las almaceno en el estado habilidadesDB para poder manipularlas en el front
  const obtenerHabilidades = () => {
    let arrayCategorias = [];
    actions.fetchData(`${store.apiURL}/api/habilidades`, {})
      .then((response) => response.json())
      .then((data) => {
        setHabilidadesDB(data); //Guardo toda la Data en el estado habilidadesDB
        data.forEach(dato => {
          arrayCategorias.includes(dato.categoria) ? null : arrayCategorias.push(dato.categoria);
        });
        setCategoriasHabilidades(arrayCategorias) //Guardo todas las categorias presentes, sin repetir
        let x = agruparHabilidadesPorCategoria(data)
        setHabilidadesIntereses(x) //Guardo la data en un formato adaptado a las necesidades
      })
      .catch((error) => console.log(error));
  }

  //Funcion para ordenar la informacion provista por la base de datos de la misma manera en la que se trabajaba
  //la informacion anteriormente
  function agruparHabilidadesPorCategoria(payload) {
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

    // Esto se puede modificar para guardar los datos en una base de datos mas adelante
    console.log('Habilidades:', habilidades);
    console.log('Intereses:', intereses);
    console.log('Aprendizaje:', aprendizaje);
    console.log('Biografía:', biografia);
    console.log('Foto de perfil:', fotoPerfil);

    //--------------------------------------------------------------------------------------------------------
    //Creo una funcion para recibir el nombre de la habilidad y conocer el id dentro de la DB de esta 
    const ordenarInformacion = (estado) => {
      aux = [];
      for (let i = 0; i < estado.length; i++) {
        for (let j = 0; j < habilidadesDB.length; j++) {
          estado[i] == habilidadesDB[j].descripcion ? aux.push(habilidadesDB[j].id) : null;
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
    form.append('correo', store.correo)
    form.append('nombre', store.nombre)
    form.append('password', store.password)
    form.append('habilidades', habilidadesOrdenadas)
    form.append('intereses', interesesOrdenadas)
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
        // setFotoPerfil(null);
        e.target.reset();
      })
      .catch((error) => console.log(error));

  };

  const hayHabilidadesRepetidas = () => {
    const habilidadesSeleccionadas = [...habilidades, ...intereses];
    const uniqueHabilidades = new Set(habilidadesSeleccionadas);
    return habilidadesSeleccionadas.length !== uniqueHabilidades.size;
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-4 custom-bg rounded-2 mt-5">
        <div className="col-md-6 text-center">

          <h3 className='titulos '>!Completa el siguiente formulario para encontrar el Match ideal!</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="habilidades" className="text-dark">
                    Selecciona lo que puedes enseñar:
                  </label>
                  <div className="d-flex flex-wrap" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {categoriasHabilidades.map((principal) => (
                      <div key={principal} className="m-1">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          style={{ backgroundColor: '#0CD5A9' }}
                          disabled
                        >
                          {principal}
                        </button>
                        {habilidadesIntereses[principal].map((habilidad) => (
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
                    ))}
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
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="intereses" className="text-dark">
                    Selecciona lo que te gustaría aprender:
                  </label>
                  <div className="d-flex flex-wrap" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {categoriasHabilidades.map((principal) => (
                      <div key={principal} className="m-1">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          style={{ backgroundColor: '#0CD5A9' }}
                          disabled
                        >
                          {principal}
                        </button>
                        {habilidadesIntereses[principal].map((interes) => (
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
                    ))}
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
            <div className="form-group mt-4">
              <label htmlFor="aprendizaje" className="text-dark">
                Resalta tus mayores cualidades a la hora de aprender y enseñar (máximo 200 caracteres)
              </label>
              <textarea
                id="aprendizaje"
                className="form-control"
                maxLength="200"
                value={aprendizaje}
                onChange={(e) => setAprendizaje(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="biografia" className="text-dark">
                Cuéntanos un poco sobre ti: (máximo 500 caracteres)
              </label>
              <textarea
                id="biografia"
                className="form-control"
                maxLength="500"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="fotoPerfil" className="text-dark">
                Sube tu foto de perfil:
              </label>
              <br />
              <br />
              <input
                type="file"
                id="fotoPerfil"
                className="form-control-file"
                accept="image/*"
                onChange={(e) => setFotoPerfil(e.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-dark mt-4">
              Registrarme
            </button>
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
        autoClose={5000}
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
