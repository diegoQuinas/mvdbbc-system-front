import React from 'react';
import TemplateHeader from './Templates/TemplateHeader';
import TemplateMenu from './Templates/TemplateMenu';
import ItemSocio from './ItemSocio';

function Listar() {
  // Definir los datos de los socios en un array
  const socios = [
    {
      nombre: 'Diego',
      apellido: 'Perez',
      documento: '46853095',
      fechaNacimiento: '13/02/1996',
      foto: './src/assets/mujer1.jpeg',
    },
    {
      nombre: 'Laura',
      apellido: 'Gonzalez',
      documento: '12345678',
      fechaNacimiento: '22/05/1990',
      foto: './src/assets/mujer2.jpeg', // Cambia esto por la ruta de tu foto
    },
    {
      nombre: 'Carlos',
      apellido: 'Lopez',
      documento: '87654321',
      fechaNacimiento: '05/10/1985',
      foto: './src/assets/hombre1.jpeg', // Cambia esto por la ruta de tu foto
    },
    // Agrega más socios según sea necesario
  ];

  return (
    <>
      <TemplateHeader />

      <div className="flex h-screen">
        {/* Menu Lateral */}
        <div className="w-1/6 bg-blue-100 h-screen">
          <TemplateMenu />
        </div>

        {/* Contenedor de los Socios */}
        <div className="w-5/6 bg-blue-100 flex flex-col justify-start items-start space-y-4 p-4">
          {socios.map((socio, index) => (
            <ItemSocio 
              key={index} // Asegúrate de usar una clave única
              nombre={socio.nombre}
              apellido={socio.apellido}
              documento={socio.documento}
              fechaNacimiento={socio.fechaNacimiento}
              foto={socio.foto}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Listar;

