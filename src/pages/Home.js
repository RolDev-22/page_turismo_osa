import React from "react";
import Login from "../components/Login/Login";
import Jumbotron from "../components/Jumbotron/Jumbotron";

const Home = () => {
  return (
    <div className="container-box">
      <div className="box box-login">
        <h3>Inicio de sesión</h3>
        <Login />
      </div>
      <div className="box box-blog">
        <h3>Osa te conviene</h3>
        <Jumbotron />
      </div>
      <div className="box box-jumbotron">
        <h3>Blog de turismo</h3>
      </div>
    </div>
  );
};

export default Home;
