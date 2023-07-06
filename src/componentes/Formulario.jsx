import React, { useState } from 'react';
import logoImage from "../logo1.png";

const Formulario = () => {
  const habilidadesPrincipales = ['Programación', 'Marketing', 'Idiomas', 'Habilidades blandas', 'Startups', 'Diseño UX', 'Negocios'];
  const habilidadesIntereses = {
    Programación: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Swift', 'PHP'],
    Marketing: ['SEO', 'SEM', 'Marketing de contenidos', 'Analítica web', 'Email marketing'],
    Idiomas: ['Inglés', 'Español', 'Francés', 'Alemán', 'Chino', 'Japonés'],
    'Habilidades blandas': ['Comunicación efectiva', 'Trabajo en equipo', 'Liderazgo', 'Resolución de problemas'],
    Startups: ['Emprendimiento', 'Validación de ideas', 'Finanzas para startups', 'Modelos de negocio'],
    'Diseño UX': ['Wireframing', 'Prototipado', 'Investigación de usuarios', 'Arquitectura de información'],
    Negocios: ['Planificación estratégica', 'Gestión de proyectos', 'Análisis de mercado', 'Ventas'],
  };

  const [habilidades, setHabilidades] = useState([]);
  const [intereses, setIntereses] = useState([]);
  const [aprendizaje, setAprendizaje] = useState('');
  const [biografia, setBiografia] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [habilidadesError, setHabilidadesError] = useState(false);
  const [interesesError, setInteresesError] = useState(false);

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
  };

  const hayHabilidadesRepetidas = () => {
    const habilidadesSeleccionadas = [...habilidades, ...intereses];
    const uniqueHabilidades = new Set(habilidadesSeleccionadas);
    return habilidadesSeleccionadas.length !== uniqueHabilidades.size;
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-4 custom-bg rounded-2">
      <div className="col-md-6 text-center">
      <h3 className='titulos '>!Completa el siguiente formulario para encontrar el Match ideal!</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="habilidades" className="text-light">
                    Selecciona lo que puedes enseñar:
                  </label>
                  <div className="d-flex flex-wrap" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {habilidadesPrincipales.map((principal) => (
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
                            className={`btn btn-sm m-1 ${
                              habilidades.includes(habilidad) ? 'btn-secondary' : 'btn-primary'
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
                  <label htmlFor="intereses" className="text-light">
                    Selecciona lo que te gustaría aprender:
                  </label>
                  <div className="d-flex flex-wrap" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                    {habilidadesPrincipales.map((principal) => (
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
                            className={`btn btn-sm m-1 ${
                              intereses.includes(interes) ? 'btn-secondary' : 'btn-primary'
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
              <label htmlFor="aprendizaje" className="text-light">
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
              <label htmlFor="biografia" className="text-light">
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
              <label htmlFor="fotoPerfil" className="text-light">
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
    </div>
    
  );
};

export default Formulario;
