import { useEffect, useState } from "react"
import FormularioBuscarSocio from './FormularioBuscarSocio.tsx';
import TemplateHeader from './Templates/TemplateHeader.tsx';
import TemplateMenu from './Templates/TemplateMenu.tsx';



function Buscar() {

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
    <FormularioBuscarSocio />
  </div>
</div>
  </>
  )
}

export default Buscar
