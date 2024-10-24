
import FormularioBuscarSocio from './FormularioBuscarSocio.tsx'
import './index.css'

function App() {

  return (
    <>
      <div className="bg-red-700 text-center mx-auto w-full text-white">
        <h1 className="text-3xl font-bold">
          Montevideo BBC
        </h1>
        <h2>
          Sistema de gestión de socios
        </h2>
      </div>
      <div className="flex">
        <div className="w-1/3 flex flex-col items-start">
          <button className="w-full border bg-red-700 hover:bg-red-800 px-4 py-2 text-white">
            Cuotas
          </button>
          <button className="w-full border bg-red-700 hover:bg-red-800 px-4 py-2 text-white">
            Buscar Socio
          </button>
        </div>
        <div className="bg-blue-100 w-full">
          <FormularioBuscarSocio />
        </div>
      </div>
    </>
  )
}

export default App
