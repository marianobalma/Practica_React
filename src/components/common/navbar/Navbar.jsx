const Navbar = () => {
  return (
    <ul
      style={{
        width: "100%",
        height: "50",
        border: "2px solid gray",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <li style={{listStyle:"none", cursor: "pointer"}}>Inicio</li>
      <li style={{listStyle:"none", cursor: "pointer"}}>Quienes somos? </li>
      <li style={{listStyle:"none", cursor: "pointer"}}>Contacto</li>
    </ul>
  );
};

export default Navbar;

//no hace falta crear un archivo CSS para hacer estilos
