import React, { useState } from "react";
import NavMenu from "./NavMenu";

function HeaderNav() {
  const [active, setActive] = useState(false);

  return (
    <div className="container">
      <section className="container-top">
        <img
          src={`${process.env.PUBLIC_URL}/Turismo_Osa.png`}
          alt="Logo Turismo Osa"
        />
        <h1>
          Turismo Rural Comunitario{" "}
          <a
            href="https://www.gobiernolocalosa.go.cr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSA
          </a>
        </h1>
        <h5>Municipalidad de Osa</h5>
      </section>

      <section className="container-button">
        <button
          id="btn-menu"
          className="button-menu"
          onClick={() => setActive(!active)}
          aria-label="Abrir menú de navegación"
        >
          <span></span>
        </button>

        <NavMenu active={active} />
      </section>
    </div>
  );
}

export default HeaderNav;
