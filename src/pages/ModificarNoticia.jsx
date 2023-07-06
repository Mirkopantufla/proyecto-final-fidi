import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/AppContext';

const ModificarNoticia = () => {

  //Aqui llamo al context para solicitar del STORE la url de la API y de ACTIONS mi funcion Fetch
  const { store, actions } = useContext(Context);

  const [buscar, setBuscar] = useState(null);
  const [noticias, setNoticias] = useState([]);
  const [tituloNoticia, setTituloNoticia] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [image, setImage] = useState(null);
  const [mensajeAdvetencia, setMensajeAdvertencia] = useState(null);

  const capitalize = (textoNormal) => {
    let nombre = textoNormal;
    let primeraLetra = nombre.charAt(0)
    let primeraLetraMayus = primeraLetra.toUpperCase()
    let letrasRestantes = nombre.slice(1)
    let textoCapitalizado = primeraLetraMayus + letrasRestantes
    return textoCapitalizado;
  }

  const obtenerNoticias = () => {
    actions.fetchData(`${store.apiURL}/api/administrar/modificarNoticia`, {})
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data)
        let arrayNoticias = null;
        arrayNoticias = noticias.filter((dato) => dato.titulo.includes(capitalize(buscar)));
        if (arrayNoticias != "" && buscar != "") {
          setMensajeAdvertencia("")
          setTituloNoticia(arrayNoticias.titulo)
          setDescripcion(arrayNoticias.titulo)
          setTituloNoticia(arrayNoticias.titulo)
          console.log(arrayNoticias)
        } else {
          setMensajeAdvertencia("No encontrado");
        }
      })
      .catch((error) => console.log(error));
  }

  const handleBuscar = (e) => {
    e.preventDefault();

    // Aqui, creamos el formulario que se enviara por metodo POST en un fetch
    const form = new FormData();
    form.append('titulo', tituloNoticia)
    form.append('descripcion', descripcion)
    form.append('image', image);

    //Defino las opciones con las cuales enviare el formulario definido por el body
    const options = {
      method: 'POST',
      body: form
    }

    actions.fetchData(`${store.apiURL}/api/administrar/agregarNoticia`, options)
      .then(response => response.json())
      .then(data => {
        toast.success(data.message);
        setImage(null);
        setTituloNoticia(null);
        setDescripcion(null);
        e.target.reset();
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className='container-fluid'>
      <h1 className='text-center my-5'>
        Modifica una noticia
      </h1>
      <div className="row">
        <div className="offset-3 col-6 border border-2 border-dark p-5">
          <label
            htmlFor="inptTituloNoticia"
            className="form-label fs-4 d-flex justify-content-start">
            <b>Busca la noticia por titulo</b>
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Titulo" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => setBuscar(e.target.value)} />
            <button className="btn btn-dark" type="button" id="button-addon2" onClick={obtenerNoticias}>Buscar</button>
          </div>
          <small className="form-text">{mensajeAdvetencia}</small>
        </div>
      </div>
      <div className="row">
        <div className="offset-3 col-6 border border-2 border-dark p-5">
          <form className='form-group'>
            <div className="mb-3">
              <label
                htmlFor="inptTituloNoticia"
                className="form-label fs-4 d-flex justify-content-start">
                <b>Titulo de la noticia</b>
              </label>
              <input type="text" className="form-control" id="inptTituloNoticia" onChange={(e) => setTituloNoticia(e.target.value)} />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fs-4 d-flex justify-content-start">
                <b>Descripcion</b>
              </label>
              <textarea
                className="form-control"
                id="textAreaAgregar"
                onChange={(e) => setDescripcion(e.target.value)}
              >
              </textarea>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fs-4 d-flex justify-content-start">
                <b>Fotografia portada</b>
              </label>
              <input
                type="file"
                className="form-control"
                id="inptUploadFiles"
                aria-label="Upload"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className='text-center'>
              <button type="submit" className="btn btn-primary ">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModificarNoticia