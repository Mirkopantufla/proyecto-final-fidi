import React, { useContext, useState } from 'react';
import '../../estilos/Settings.css';
import { Context } from '../../store/AppContext';
import { ToastContainer } from 'react-toastify';


const Password = () => {
  const [error, setError] = useState('');
  const { store, actions } = useContext(Context);

  return (
    <>
      <form onSubmit={(e) => actions.cambiarPassword(e)}>
        <div className="form-group">
          <label className='fs-5'><b>Contraseña actual:</b></label>
          <input
            type="password"
            className="form-control"
            name="actualPass"
            onChange={actions.handleChange}
          />
        </div>
        <div className="form-group">
          <label className='fs-5'><b>Nueva contraseña:</b></label>
          <input
            type="password"
            className="form-control"
            name="newPass"
            onChange={actions.handleChange}
          />
        </div>
        <div className="form-group">
          <label className='fs-5'><b>Repite la nueva contraseña:</b></label>
          <input
            type="password"
            className="form-control"
            name="verifyPass"
            onChange={actions.handleChange}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <br />
        <button type="submit" className="btn btn-dark custom-button">
          Guardar contraseña
        </button>
        <br />
      </form>
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
    </>
  );
};

export default Password;
