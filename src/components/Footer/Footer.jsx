import React from "react";

function Footer() {
  return (
    <div className="container-footer styled-shared2">
      <div className="container-footer-top">
        <div className="footer-left">
          <img
            src={`${process.env.PUBLIC_URL}/escudo.png`}
            alt="Escudo de la municipalidad"
          />
          <img
            src={`${process.env.PUBLIC_URL}/osa-logo.png`}
            alt="Logo de la municipalidad"
          />
        </div>
        <div className="footer-right">
          <div>
            <h4>Municipalidad de Osa</h4>
            <h4>
              <img
                src={`${process.env.PUBLIC_URL}/icon_phone.png`}
                alt="icono telefónico"
              />
              (506) 2782-0000
            </h4>
          </div>
          <h5>
            Página web financiada por el Fondo Especial de Japón. Programa para
            la Reducción de la Pobreza, administrado por el Banco Interamericano
            de Desarrollo (BID). Fortalecimiento de grupos agrícolas del Litoral
            Pacífico de Costa Rica
          </h5>
        </div>
      </div>
      <div className="container-footer-button">
        <p>
          © 2022 Turismo Rural Comunitario Osa. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
export default Footer;
