import React from "react";
import { Link } from "react-router-dom";

function NavMenu({ active }) {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1025) {
      document.querySelector(".container-resize").classList.add("active");
    } else {
      document.querySelector(".container-resize").classList.remove("active");
    }
  });

  return (
    <nav className={`container-resize ${active ? "active" : ""}`}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/aboutProyect">Sobre el Proyecto</Link>
        </li>
        <li>
          <Link to="/about">Conózcanos</Link>
        </li>
        <li>
          <Link to="/attractions">Atractivos</Link>
        </li>
        <li>
          <Link to="/events">Eventos</Link>
        </li>
        <li>
          <Link to="/documents">Documentos</Link>
        </li>
        <li>
          <Link to="/map">Mapa</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
