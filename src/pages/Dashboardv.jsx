import React, { useEffect, useState } from 'react';
import "../estilos/Dashboardv.css";
import { FaEnvelopeOpen } from 'react-icons/fa';
import { PiPencilSimpleLineBold } from 'react-icons/pi';
import MadCat3 from '../dashimg/madcat3.jpg';
import MadCat4 from '../dashimg/madcat4.jpg';
import MadCat5 from '../dashimg/madcat5.jpg';

const ArticlePost = ({ article }) => {
  const [showFullArticle, setShowFullArticle] = useState(false);

  const handleToggleArticle = () => {
    setShowFullArticle(!showFullArticle);
  };

  return (
    <div className="article-post" style={{color:"#11100F" , backgroundColor: "#eaeaf04f" , marginBlock:"30px" , width: "750px", padding: "15px" , fontSize: "16px"}}>
       {article.image ? (
        <div className="article-image" style={{color:"#11100F" , marginBlock:"25px" , fontSize: "20px"}}>
          <img src={article.image} alt={article.title} />
        </div>
      ) : null}
      <h3>{article.title}</h3>
      {showFullArticle ? (
        <>
          <p>{article.abstract}</p>
          <p>Escrito por {article.byline}</p>
          <button onClick={handleToggleArticle} style={{fontWeight: "500" , color:"#F745AE" , backgroundColor:"#eaeaf0ae" , borderRadius:"20px" , border: "none"}}>Resumen</button>
        </>
      ) : (
        <>
          <p>{article.abstract.slice(0, 90)}...</p>
          <button onClick={handleToggleArticle} style={{fontWeight: "500" , color:"#F7BA0D" , backgroundColor:"#eaeaf0ae" , borderRadius:"20px" , border: "none"}} >Artículo completo</button>
        </>
      )}
    </div>
  );
};

const Dashboardv = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ZtXPD0bXAbNqSySaMN17ptB7Hrc7SxhJ');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className="container-fluid">
      <div className="row">
        
    
        <div className="col-9 bg-light-yellow offset-1">

          <div className="d-flex justify-content-center align-items-center flex-column">

          {apiData ? (
              <div>
                <h6 style={{marginTop:"10px"}}>Quizás te pueda interesar...</h6>
                <div className="article-list">
                  {apiData.results.map((article) => (
                    <ArticlePost key={article.id} article={article} />
                  ))}
                </div>
              </div>
            ) : (
              <div>Cargando...</div>
            )}
            
            <div className="button-container">
              <button className="btn btn-primary rounded-circle">1</button>

            </div>
          </div>
        </div>

        <div className="col-2">

          <div className="profile-section">
            <div className="profile-first border rounded-2">
              <img src={MadCat3} alt="Foto de perfil" className="rounded-circle" />
              <h5>Nombre de usuario</h5>
              <p>Frase linda</p>
              <div className="button-container">
                <button className="btn btn-light-subtle" style={{backgroundColor: "#eaeaf0c9"}}>
                  <FaEnvelopeOpen/>
                  </button>
                <button className="btn btn-light-subtle"  style={{backgroundColor: "#eaeaf0c9"}}>
                  <PiPencilSimpleLineBold/>
                </button>
              </div>
            </div>

            <div className="user-list" style={{marginTop: '20px'}}>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Alejandro Miranda</p>
                  <p style={{fontSize:'15px' , marginTop:'2px'}}>Calla burro</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Armando Losas</p>
                  <p style={{fontSize:'15px' , marginTop:'2px'}}>Q pedo wey</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Rosa Deltransito</p>
                  <p style={{fontSize:'15px', marginTop:'2px'}}>Nada manito</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

              <div className="user-item border-bottom border-secondary-subtle">
                <img src={MadCat4} alt="Foto de perfil" className="rounded-circle" />
                <div className="user-details">
                  <p style={{marginBottom: '-5px' , fontWeight: '600'}}>Matias Pasten</p>
                  <p style={{fontSize:'15px' , marginTop:'2px'}}>Ya merito llegamos?</p>
                  <button className="btn-user-detail btn-sm" style={{fontWeight:"bold"}}>
                  +Match
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboardv;