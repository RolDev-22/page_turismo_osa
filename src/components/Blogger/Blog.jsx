import React, { useState, useEffect } from "react";
import Post from "./Post";

const Blog = () => {
  const [active, setActive] = useState(false);

  const postList = [
    {
      id: 1,
      title: "Construción de caminos en osa",
      content:
        "Contenido del post 1 esta es una prueba para ver la funcionalidad de cada uno de los post y el renderizado presente dentro de la pagina y home",
      fecha: "09/04/25",
    },
    {
      id: 2,
      title: "Municipalidad de Osa impulsa caminos en Drake",
      content:
        "Contenido del post 2 esta es una prueba para ver la funcionalidad de cada uno de los post y el renderizado presente dentro de la pagina y home",
      fecha: "01/07/25",
    },
    {
      id: 3,
      title: "Incremento del 8% del turismo rural en la localidad de Osa",
      content:
        "Contenido del post 3 esta es una prueba para ver la funcionalidad de cada uno de los post y el renderizado presente dentro de la pagina y home",
      fecha: "20/02/25",
    },
    {
      id: 4,
      title: "Reconocimiento de la del ICT para la localidad de Osa",
      content:
        "Contenido del post 4 esta es una prueba para ver la funcionalidad de cada uno de los post y el renderizado presente dentro de la pagina y home",
      fecha: "30/07/25",
    },
    {
      id: 5,
      title: "Uvita se convierte en un destino turístico más activo en OSA",
      content:
        "Contenido del post 5 esta es una prueba para ver la funcionalidad de cada uno de los post y el renderizado presente dentro de la pagina y home",
      fecha: "11/06/25",
    },
    {
      id: 6,
      title:
        "Ciudad cortes se convierte en el primer cantón de Osa para el turismo industrial",
      content:
        "Contenido del post 6 esta es una prueba para ver la funcionalidad de cada uno de los post y el renderizado presente dentro de la pagina y home",
      fecha: "1/08/25",
    },
  ];

  useEffect(() => {
    postList.length > 0 ? setActive(false) : setActive(true);
  }, [postList.length]);

  return (
    <div className="container-blog styled-shared2">
      <h4 style={{ display: active ? "flex" : "none" }}>Sin post activos</h4>
      {postList.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          fecha={post.fecha}
        />
      ))}
    </div>
  );
};

export default Blog;
