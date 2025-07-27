import React from "react";
import { Link } from "react-router-dom";

function Header_Nav() {
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
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/aboutProyect"}>Sobre el Proyecto</Link>
            </li>
            <li>
              <Link to={"/about"}>Conozcanos</Link>
            </li>
            <li>
              <Link to={"/attractions"}>Atractivos</Link>
            </li>
            <li>
              <Link to={"/events"}>Eventos</Link>
            </li>
            <li>
              <Link to={"/documents"}>Documentos</Link>
            </li>
            <li>
              <Link to={"/map"}>Mapa</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Header_Nav;
