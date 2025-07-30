import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NavMenu({ active }) {
  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".container-header-resize");
      if (!container) return;

      if (window.innerWidth > 1025) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
      }
    };

    // Ejecutar inmediatamente
    handleResize();

    // Agregar event listener
    window.addEventListener("resize", handleResize);

    // Limpiar al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`container-header-resize ${active ? "active" : ""}`}>
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
