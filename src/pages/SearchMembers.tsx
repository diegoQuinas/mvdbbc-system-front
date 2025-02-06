import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import apiV1 from '../api/apiV1';

const MemberSearch: React.FC = () => {
  const [queryLastname, setQueryLastname] = useState('');
  const [queryName, setQueryName] = useState('');
  const [members, setMembers] = useState<{ id: number; name: string, lastname: string, ci:string, birth_date:string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setMembers([]);
    if (!queryName && !queryLastname) return;
    setQueryName('');
    setQueryLastname('');
    setLoading(true);
    try {
      const response = await apiV1.get('/members/find_by_name', {
        params: { name: queryName, lastname: queryLastname },
      });
      setMembers(response.data.data);
    }
       catch (error) {
        if (axios.isAxiosError(error)) {
          error.response
            ? toast.error(`Error buscando socios`)
            : toast.error('El servicio no trajo información');
        } else {
          toast.error('Ocurrió un error inesperado');
        }
      } finally {
        setLoading(false);
      }
    };
 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Escudo del club */}
      <div className="mb-8">
        <img
          src="./public/club_logo.jpg" // Ruta a la imagen en la carpeta public
          alt="Escudo del Club"
          className="w-32 h-32 rounded-full border-4 border-red-600 shadow-lg"
        />
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold text-red-600 mb-6">Buscador de Socios</h1>

      {/* Formulario de búsqueda */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="space-y-4">
          <input
            type="text"
            value={queryName}
            onChange={(e) => setQueryName(e.target.value)}
            placeholder="Buscar socio por nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            value={queryLastname}
            onChange={(e) => setQueryLastname(e.target.value)}
            placeholder="Buscar socio por apellido"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50"
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </div>

      {/* Resultados de la búsqueda */}
        {members.length > 0 ? (
          <div>
            <div className="text-red-600 p-4 text-center ">
              {members.length} socio(s) encontrado(s)
              </div>
            <table className="w-full min-w-max table-auto text-center rounded-lg shadow-md">      
              <thead className="w-full min-w-max table-auto text-left rounded-lg">
              <tr>
              <th className= "border-b border-blue-gray-100 bg-blue-gray-50 p-4">Nombre</th> 
              <th className= "border-b border-blue-gray-100 bg-blue-gray-50 p-4">Documento</th> 
              <th className= "border-b border-blue-gray-100 bg-blue-gray-50 p-4">Fecha nacimiento</th> 
              </tr>
              </thead>
              <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="bg-white p-4 rounded-lg shadow-md text-gray-700"
              >
                <td className="p-4">{member.name} {member.lastname}</td>
                 <td className="p-4">{member.ci}</td> 
                 <td className="p-4">{member.birth_date}</td>
                
              </tr>
            ))}</tbody>
          
      </table>
      </div>
         ): (
          <p className="text-gray-600 text-center">No se encontraron socios.</p>
        )}

    </div>
  );
};

export default MemberSearch;