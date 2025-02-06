import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function MemberDetail() {
  const { id } = useParams(); // Obtener el ID de la URL
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://tu-api.com/members/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMember(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Cargando...</p>;
  if (!member) return <p className="text-center text-red-500 mt-10">Miembro no encontrado</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 border-t-4 border-red-600">
      {/* Escudo del Club */}
      <div className="flex justify-center mb-4">
        <img 
          src="/escudo.png" // Asegúrate de tener el escudo en public/escudo.png
          alt="Escudo del Club"
          className="w-24 h-24"
        />
      </div>

      {/* Nombre y CI */}
      <h1 className="text-3xl font-bold text-red-700 text-center mb-2">
        {member.name} {member.lastname}
      </h1>
      <p className="text-gray-600 text-center text-lg">
        <strong>CI:</strong> {member.ci}
      </p>

      {/* Información General */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong className="text-red-600">Fecha de Nacimiento:</strong> {member.birth_date}</p>
        <p><strong className="text-red-600">Teléfono:</strong> {member.phone}</p>
        <p><strong className="text-red-600">Dirección:</strong> {member.address}</p>
        <p><strong className="text-red-600">Sociedad Médica:</strong> {member.medical_society_id}</p>
        {member.observation && (
          <p className="md:col-span-2"><strong className="text-red-600">Observaciones:</strong> {member.observation}</p>
        )}
      </div>

      {/* Tutor (si existe) */}
      {member.tutor_name && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Datos del Tutor</h2>
          <p><strong>Nombre:</strong> {member.tutor_name} {member.tutor_lastname}</p>
          <p><strong>Teléfono:</strong> {member.tutor_phone}</p>
        </div>
      )}

      {/* Actividades */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-red-700 border-b-2 border-red-600 pb-1 mb-3">Actividades</h2>
        {member.activities.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {member.activities.map((activity, index) => (
              <li key={index} className="text-gray-700">
                {activity.name} <span className="text-sm text-gray-500">({activity.category})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No participa en ninguna actividad.</p>
        )}
      </div>

      {/* Fechas de Creación y Actualización */}
      <div className="mt-6 text-gray-500 text-sm">
        <p><strong>Creado:</strong> {new Date(member.created_at).toLocaleString()}</p>
        <p><strong>Última actualización:</strong> {new Date(member.updated_at).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default MemberDetail;
