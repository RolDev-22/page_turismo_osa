import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="container-login styled-shared2">
      <div className="input-container">
        <label htmlFor="input-mail">Usuario</label>
        <input id="input-user" type="text" placeholder="Usuario" />
      </div>
      <div className="input-container">
        <label htmlFor="input-password">Contraseña</label>
        <input id="input-password" type="password" placeholder="Contraseña" />
      </div>
      <Link>¿Olvidaste tu contraseña?</Link>
      <Link>Registrarme</Link>
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
