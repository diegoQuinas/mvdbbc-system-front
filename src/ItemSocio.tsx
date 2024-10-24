import React from 'react';
import { useNavigate } from 'react-router-dom';

function ItemSocio({ nombre, apellido, documento, fechaNacimiento, foto }) {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleClick = () => {
    // Construye el objeto con los datos del socio
    const socioData = {
      nombre,
      apellido,
      documento,
      fechaNacimiento,
      foto,
    };

    // Redirige a /login y envía los datos del socio
    navigate("/detaleUsr", { state: { socio: socioData } });
  };

  return (
    <div 
      className="flex items-center bg-blue-100 border border-gray-300 rounded-lg p-4 shadow-md space-x-4 w-full hover:bg-red-200" 
      onClick={handleClick}
    >
      {foto && (
        <img 
          src={foto} 
          alt={`${nombre} ${apellido}`} 
          className="w-16 h-16 rounded-full object-cover"
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{`${nombre} ${apellido}`}</h3>
        <p className="text-gray-600">Documento: {documento}</p>
        <p className="text-gray-600">Fecha de Nacimiento: {fechaNacimiento}</p>
      </div>
    </div>
  );
}

export default ItemSocio;
