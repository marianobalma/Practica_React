
import { useState } from "react";
import Navbar from "../../common/navbar/Navbar"; 
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks";

// supuestamente tira error xq se renombro el nombre de la carpeta con minuscula, ya esta arreglado

export const Home = () => {

  const [ contador , setContador ]= useState(0)


  /* no se puede retornar mas de un elemento
    si pongo nombre sin llaves me lo toma como texto
    a menos que lo ponga dentro de un div, con 2 divs separados no funciona, sino que se crea un div padre
    */

  return (
    <>
    <Navbar/>
    <PruebasHooks contador={contador} setContador={setContador}/>
    </>
  );
};


/*otra forma de exportar
export default Home*/
