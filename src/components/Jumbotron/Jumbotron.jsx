import React, { useState, useEffect } from "react";

const Jumbotron = () => {
  const imagesObjt = [
    {
      name: "Parque nacionalMarino Ballena",
      description:
        "Parque nacional ubicado en el distrito de Uvita, donde podrás observar gran variedad de flora y fauna, además disfrutar de su hermosa playa y atractivo principal, el famoso paso de Moisés",
      image: `${process.env.PUBLIC_URL}/bg_jtb1.jpg`,
    },
    {
      name: "Esferas de Osa",
      description:
        "Esferas precolombinas ubicadas en la peninsula de Osa, son una de las principales atracciones turisticas de la localidad, se encuentran en el distrito de Sierpe y extendidas a lo largo de las fincas de palmar sur",
      image: `${process.env.PUBLIC_URL}/bg_jtb2.jpg`,
    },
    {
      name: "Playa Hermosa",
      description:
        "Playa hermosa ubicada en el distrito de Uvita, donde podrás disfrutar de la hermosa playa y la tranquilidad de la naturaleza",
      image: `${process.env.PUBLIC_URL}/bg_jtb3.jpg`,
    },
    {
      name: "Mono Carablanca",
      description:
        "Maravillosa fauna ubicada a lo largo de la peninsula de Osa, una de las especies más visibles y admirables",
      image: `${process.env.PUBLIC_URL}/bg_jtb4.jpg`,
    },
    {
      name: "Oso hormiguero",
      description:
        "Oso hormiguero también ubicado a lo largo del cantón de Osa, especie muy habitual de la sona y muy visible a cualquier hora del día",
      image: `${process.env.PUBLIC_URL}/bg_jtb5.jpg`,
    },
    {
      name: "Puente Colgante Drake",
      description:
        "Puente Colgante Drake ubicado en el distrito de Drake, donde podrás disfrutar de la hermosa vista de flora, fauna y la tranquilidad de la naturaleza",
      image: `${process.env.PUBLIC_URL}/bg_jtb6.jpg`,
    },
  ];

  return (
    <div className={`container-jumbotron`}>
      <div className="content-jumbotron">
        <h2>Hola</h2>
        <img src={imagesObjt[0].image} alt="" />
        <p>
          holaskjnvglkdnfvdofnvsñldmvsdbvnsdklsmdvlknsidvnbsdoskjdfvkjsdnkjvnskdjnvkjsdbkvjbsdkjvnsjdnvksbdkvjbsdkjbinvosjdnvkjsdkivksdivisdiusdhniuvhsiduhviusdivusdiuvisdviusdvsdoiscopcxoansiy8abconasiuhciascoasnmfiu
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
