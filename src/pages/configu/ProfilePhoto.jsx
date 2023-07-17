import React, { useContext, useState } from 'react';
import '../../estilos/Settings.css';
import { ToastContainer, toast } from 'react-toastify';
import { Context } from '../../store/AppContext';


const ProfilePhoto = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const { store: { apiURL, id_usuario, access_token, currentUser } } = useContext(Context);

  const cambiarImagen = (e) => {
    e.preventDefault()

    const form = new FormData();
    form.append('imagen', profileImage)

    const data = {
      apiURL: `${apiURL}/api/settings/cambiarImagen/${id_usuario}`,
      options: {
        method: "POST",
        body: form,
        headers: {
          "Authorization": `Bearer ${access_token}`
        },
      },
    };

    fetch(data.apiURL, data.options)
      .then((response) => response.json())
      .then((respJson) => {
        console.log(respJson)
        toast.success(respJson.success)
        toast.warn(respJson.message)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <form onSubmit={(e) => cambiarImagen(e)}>
        <br />
        <div className="form-group">
          <label><h2>Tu fotografia actual:</h2></label>
          <br />
          <br />
          <img className='border border-3 rounded-3 border-dark' src={currentUser?.data?.user.src_imagen} alt="" style={{ height: '200px' }} />
          <br />
          <br />
          <label><h2>Sube tu nueva foto de perfil:</h2></label>
          <br />
          <br />
          <input
            type="file"
            className="form-control"
            name="cambioImagen"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <br />
          <p className='text-danger fs-5'><b>Advertencia:</b> Tu fotografia anterior sera eliminada de de FiDi</p>
          <br />
          {
            profileImage ? <img className='mt-4 border border-3 rounded-3 border-dark' src={URL.createObjectURL(profileImage)} alt="" style={{ height: '180px' }} /> : null
          }

        </div>
        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn btn-dark custom-button">
          Cambiar foto de perfil
        </button>
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

export default ProfilePhoto;
