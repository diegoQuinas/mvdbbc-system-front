import { useEffect, useState } from "react"




function FormularioBuscarSocio() {



  const [activado, setActivado] = useState("pito");

  const handleClick = () => {
    setActivado("hola");
  }

  return (
    <>
      <div className="m-4 flex flex-col w-full items-start space-y-3 pr-8">

        <h2 className="font-bold text-2xl text-red-800 p-3">Búsqueda de socio</h2>
        <div className="border-red-900 border space-y-3 p-3">
          <div className="flex">
            <p className="p-2">Cédula:</p>
            <input type="text" placeholder="46853095" className="border border-gray-300 rounded p-2 w-full mr-4" />
          </div>
          <div className="flex">
            <p className="p-2">Número de socio:</p>
            <input type="text" placeholder="5783" className="border border-gray-300 rounded p-2 w-full mr-4" />
          </div>
          <h3 className="text-red-800 p-3">
            Otros datos
          </h3>
          <div className="flex">
            <p className="p-2">Nombre:</p>
            <input type="text" placeholder="Diego" className="border border-gray-300 rounded p-2 w-full mr-4" />
          </div>
          <div className="flex">
            <p className="p-2">Apellido:</p>
            <input type="text" placeholder="Perez" className="border border-gray-300 rounded p-2 w-full mr-4" />
          </div>
          <div className="flex">
            <p className="p-2">Fecha de nacimiento:</p>
            <input type="text" placeholder="13/02/96" className="border border-gray-300 rounded p-2 w-full mr-4" />
          </div>
          <div className="flex">
            <p className="p-2">Fecha de nacimiento:</p>
            <input type="text" placeholder="13/02/96" className="border border-gray-300 rounded p-2 w-full mr-4" />
          </div>
          <div className="flex flex-row-reverse w-full pr-4">
            <button onClick={handleClick} type="submit" className="border border-red-700 p-2 rounded hover:bg-red-800 hover:text-white">

              {activado}
            </button>
          </div>
        </div>
      </div >
    </>
  )
}

export default FormularioBuscarSocio
