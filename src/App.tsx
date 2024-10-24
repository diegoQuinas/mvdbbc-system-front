
import FormularioBuscarSocio from './FormularioBuscarSocio.tsx';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css'
import Login from './Login.tsx';
import Buscar from './Buscar.tsx';
import Listar from './ListadoSocios.tsx'
import Detalle from './DetalleUsuario.tsx'

  function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormularioBuscarSocio />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/listaUsr" element={<Listar />} />
        <Route path="/detaleUsr" element={<Detalle />} />
          {/* <Route path="/App" /> {<App/>} 
          <Route path="/Form" /> {<Form/>}
          <Route path="/detalleUsr" /> {<detalleUsr/>}
          <Route path="/historicoUsr" /> {<historicoUsr/>}  */}
        </Routes>
      </BrowserRouter>
    );
  }


export default App
