import React from 'react';
import { useLocation } from 'react-router-dom';
import TemplateHeader from './Templates/TemplateHeader';
import TemplateMenu from './Templates/TemplateMenu';


function Detalle() {
  const location = useLocation();
  const { socio } = location.state || {}; // Desestructura los datos del socio

  return (
    <>
      <TemplateHeader />

      <div className="flex h-screen">
        {/* Menu Lateral */}
        <div className="w-1/6 bg-blue-100 h-screen">
          <TemplateMenu />
        </div>

        {/* Contenedor del Formulario y Datos del Socio */}
        <div className="w-5/6 bg-blue-100 flex flex-col justify-start items-start p-4">
          
          {/* Mostrar los detalles del socio si están disponibles */}
          {socio ? (
            <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white w-full">
                            {socio.foto && (
                <img 
                  src={socio.foto} 
                  alt={`${socio.nombre} ${socio.apellido}`} 
                  className="w-32 h-32 rounded-full object-cover mt-2"
                />
              )}
              <h3 className="text-lg font-bold">Detalles del Socio</h3>

              <p><strong>Nombre:</strong> {socio.nombre}</p>
              <p><strong>Apellido:</strong> {socio.apellido}</p>
              <p><strong>Documento:</strong> {socio.documento}</p>
              <p><strong>Fecha de Nacimiento:</strong> {socio.fechaNacimiento}</p>
              <p><strong >Vencimiento Cuota:</strong> 10/10/2024</p>

            </div>
          ) : (
            <p className="text-red-500">No hay datos del socio disponibles.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Detalle;
