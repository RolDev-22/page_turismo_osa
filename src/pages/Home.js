import React from "react";
import Login from "../components/Login/Login";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Blog from "../components/Blogger/Blog";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="container-box">
        <div className="box box-login">
          <h3>Inicio de sesión</h3>
          <Login />
        </div>
        <div className="box box-jumbotron">
          <h3>Osa te conviene</h3>
          <Jumbotron />
        </div>
        <div className="box box-blog">
          <h3>Blog de turismo</h3>
          <Blog />
        </div>
      </section>
      <section className="container-information">
        <h3>A PASARLO BIEN</h3>
        <div>
          <Link to="/map">
            <img src={`${process.env.PUBLIC_URL}/map.png`} alt="Mapa de Osa" />
          </Link>
          <p>
            El cantón de Osa, ubicado en la Región Brunca, es uno de los
            destinos favoritos de turistas nacionales e internacionales. La gran
            biodiversidad, las bellezas naturales y la riqueza cultural, lo
            convierten en sitio de privilegio para la visitación. La oferta
            turística es amplia y variada: cataratas, impresionantes vistas
            panorámicas desde montañas como las de Muñeco en Cortés; esferas
            pre-colombinas, canopy tours; surfing; extraordinarias playas como
            las de Arco y Ventanas; humedales, vistas de ballenas y delfines;
            guacamayas, entre otros, ofrecen gran potencial de asombro y
            diversión en Osa.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
