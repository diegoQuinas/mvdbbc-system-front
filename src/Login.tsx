
import { useState } from 'react';


import './index.css'
import TemplateHeader from './Templates/TemplateHeader';
import TemplateMenu from './Templates/TemplateMenu';
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Login() {

  const [usuario, setUsuario] = useState(""); // Estado para el usuario
  const [contrasenia, setContrasenia] = useState(""); // Estado para la contraseña
  const navigate = useNavigate(); // Inicializa useNavigate
  const [estadoLogin,setEstado]=useState("NO LOGIN")

  const handleClick = () => {
    // Verifica las credenciales
    if (usuario === "admin" && contrasenia === "admin") {
      const nuevoEstado = "LOGIN CORRECTO";
      setEstado(nuevoEstado);
      localStorage.setItem("estadoLogin", nuevoEstado); // Guarda el estado en localStorage
      navigate("/Buscar");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <>
      <TemplateHeader />

      <div className="flex h-screen">
        <div className="w-1/6 bg-blue-100 h-screen">
          <TemplateMenu />
        </div>
        <div className="w-5/6 bg-blue-100 flex justify-center items-start">
          <div className="m-4 flex flex-col w-full items-start space-y-3 pr-8">
            <h2 className="font-bold text-2xl text-red-800 p-3">Inicio de sesión</h2>
            <div className="border-red-900 border space-y-3 p-3">
              <div className="flex">
                <p className="p-2">Usuario:</p>
                <input
                  type="text"
                  placeholder="user"
                  value={usuario} // Vincula el valor del input
                  onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado
                  className="border border-gray-300 rounded p-2 w-full mr-4"
                />
              </div>
              <div className="flex">
                <p className="p-2">Contraseña:</p>
                <input
                  type="password"
                  placeholder="****"
                  value={contrasenia} // Vincula el valor del input
                  onChange={(e) => setContrasenia(e.target.value)} // Actualiza el estado
                  className="border border-gray-300 rounded p-2 w-full mr-4"
                />
              </div>
              <div className="flex flex-row-reverse w-full pr-4">
                <button
                  onClick={handleClick}
                  type="submit"
                  className="border border-red-700 p-2 rounded hover:bg-red-800 hover:text-white"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;