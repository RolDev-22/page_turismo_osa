import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <section className="container-top">
        <img src="/Turismo_Osa.png" alt="icono-pagina" />
        <h1>
          Turismo Rural Comunitario{" "}
          <a href="https://www.osa.gob.ar/" target="_blank">
            OSA
          </a>
        </h1>
        <h5>Municipalidad de Osa</h5>
      </section>
      <section className="container-button">
        <nav>
          <ul>
            <Link to={"/"}>Inicio</Link>
            <Link to={""}>Sobre el Proyecto</Link>
            <Link to={""}>Conozcanos</Link>
            <Link to={""}>Atractivos</Link>
            <Link to={""}>Oferta Turistica</Link>
            <Link to={""}>Eventos</Link>
            <Link to={""}>Documentos</Link>
            <Link to={""}>Mapa</Link>
            <Link to={""}>Contacto</Link>
          </ul>
        </nav>
      </section>
    </div>
  );
}
