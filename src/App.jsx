import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "./logo1.png";
import logoImage2 from "./logo2rosa.png";


function App() {
  return (
    <div>
      <nav class="navbar navbar-light">
        <a class="navbar-brand" href="#">
          <img
            src={logoImage}
            alt="Logo"
            width="150"
            height="150"
            className="logo"
          />
        </a>
      </nav>

      {/* Contenedor principal */}
      <div className="container main-container custom-bg rounded">
        <div className="row">
          {/* Sección de explorar */}
          <div className="col-sm-6">
            <div className="explore-container  p-4">
              <h2>Explora personas que quieran intercambiar conocimiento</h2>
              <button className="btn btn-dark">Explorar</button>
            </div>
          </div>

          {/* Sección de registro */}
          <div className="col-sm-6">
            <div className="registration-container  p-4">
              <h1>Regístrate en Fidi</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nombre:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-dark">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Pie de página */}
      <footer className="text-center py-4">
     
      <p>&copy; 2023 Fidi. Todos los derechos reservados.</p>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-12 text-center">
            <img src={logoImage2} alt="Logo" width="50"height="40"className="footer-logo" />
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
