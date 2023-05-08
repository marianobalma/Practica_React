import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/characters">Ver pj</Link>
    </>
  );
};

//igual q etiqueta a, pero no refresca la pagina
//to funciona igual que el href 

export default Home;
