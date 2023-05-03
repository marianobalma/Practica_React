import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/pages/home/Home";
import Formulario from "./components/pages/formulario/Formulario";
import Login from "./components/pages/login/Login";

// BrowserRouter arma la estructura de enrutamiento; Routes envolver rutas individuales; Route crea rutas

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>

        <Route path="/" element= {<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/formulario" element={<Formulario/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

// path significa como se llama la ruta; element sirve para renderizar
export default App;
