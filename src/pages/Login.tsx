
 import React from 'react';
import apiV1 from '../api/apiV1';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login: React.FC = () => {
  
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try{
      const response = await apiV1.post('/user/login', { email, password }, { withCredentials: true });
      
      toast.success(
        `Bienvenido/a ${response.data.user.name}`);
        } catch (error) {
          if (axios.isAxiosError(error)) {
        error.response? toast.error('Error al loguear usuario: ' + error.response.data.error): toast.error('El servicio está desconectado');
      } else {
        // Mostrar un mensaje genérico si el error no es de axios
        toast.error('Ocurrió un error inesperado');
      }
      }
    }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Escudo del Club de Basket Montevideo */}
        <div className="flex justify-center mb-6">
          <img
            src="/club_logo.jpg"
            alt="Escudo del Club de Basket Montevideo"
            className="w-24 h-24 rounded-full"
          />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Login</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              onInput={handleEmailInput}
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              onInput={handlePasswordInput}
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;