
import FormularioBuscarSocio from './FormularioBuscarSocio.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Login from './Login.tsx';
import TemplateHeader from './Templates/TemplateHeader.tsx';
import TemplateMenu from './Templates/TemplateMenu.tsx';

function App() {

  localStorage.setItem("estadoLogin", "NO LOGIN");

  return (
    <>
      <TemplateHeader />

      <div className="flex h-screen">
        {/* Menu Lateral */}
        <div className="w-1/6 bg-blue-100 h-screen">
          <TemplateMenu />
        </div>

        {/* Contenedor del Formulario */}
        <div className="w-5/6 bg-blue-100 flex justify-center items-start">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/buscar-socio" element={<FormularioBuscarSocio />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}


export default App
