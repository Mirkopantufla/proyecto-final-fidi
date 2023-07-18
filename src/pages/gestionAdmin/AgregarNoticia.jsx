import React, { useContext, useState } from 'react'
import { Context } from '../../store/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import { IoChevronBackCircleSharp } from 'react-icons/io5';

const AgregarNoticia = () => {

  //Aqui llamo al context para solicitar del STORE la url de la API y de ACTIONS mi funcion Fetch
  const { store, actions } = useContext(Context);

  const [titulo, setTitulo] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [image, setImage] = useState(null);

  const handleNuevaNoticia = (e) => {
    e.preventDefault();

    // Aqui, creamos el formulario que se enviara por metodo POST en un fetch
    const form = new FormData();
    form.append('titulo', titulo)
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
        setTitulo(null);
        setDescripcion(null);
        e.target.reset();
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className='container'>
      <div className="row custom-bg">
        <div className="mt-5 ms-5 col-md-12 d-flex justify-content-start">
          <IoChevronBackCircleSharp className='display-5 icono-atras' onClick={() => window.history.back()} />
        </div>
        <h1 className='text-center mb-5'>
          Agrega una noticia
        </h1>
        <div className="offset-3 col-6 border border-2 border-dark p-5 mb-5">
          <form className='form-group' onSubmit={handleNuevaNoticia}>
            <div className="mb-3">
              <label
                htmlFor="inptTituloNoticia"
                className="form-label fs-4 d-flex justify-content-start">
                <b>Titulo de la noticia</b>
              </label>
              <input type="text" className="form-control" id="inptTituloNoticia" onChange={(e) => setTitulo(e.target.value)} />
              <small className="form-text">We'll never share your email with anyone else.</small>
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
  )
}

export default AgregarNoticia