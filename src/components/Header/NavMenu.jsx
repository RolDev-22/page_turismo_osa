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
          <Link onClick={activeMenu} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/aboutProyect">
            Sobre el Proyecto
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/about">
            Conózcanos
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/attractions">
            Atractivos
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/events">
            Eventos
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/documents">
            Documentos
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/map">
            Mapa
          </Link>
        </li>
        <li>
          <Link onClick={activeMenu} to="/contact">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function activeMenu() {
  const container = document.querySelector(".container-header-resize");
  container.classList.toggle("active");
}

export default NavMenu;
