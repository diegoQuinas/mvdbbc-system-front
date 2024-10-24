import React from 'react';
import './index copy.css'

// Datos ajustados: $1500 por mes y las fechas de cobertura corresponden con la cantidad de meses pagados
const datos = [
  { 
    numeroRecibo: '001',
    fechaPago: '2024-01-15',
    monto: 3000.00, // 2 meses
    cantidadMeses: 2,
    fechaComienzoCobertura: '2024-02-01',
    fechaFinCobertura: '2024-03-31'
  },
  { 
    numeroRecibo: '002',
    fechaPago: '2024-02-10',
    monto: 4500.00, // 3 meses
    cantidadMeses: 3,
    fechaComienzoCobertura: '2024-03-01',
    fechaFinCobertura: '2024-05-31'
  },
  { 
    numeroRecibo: '003',
    fechaPago: '2024-03-05',
    monto: 6000.00, // 4 meses
    cantidadMeses: 4,
    fechaComienzoCobertura: '2024-04-01',
    fechaFinCobertura: '2024-07-31'
  },
  { 
    numeroRecibo: '004',
    fechaPago: '2024-04-12',
    monto: 4500.00, // 3 meses
    cantidadMeses: 3,
    fechaComienzoCobertura: '2024-05-01',
    fechaFinCobertura: '2024-07-31'
  },
  { 
    numeroRecibo: '005',
    fechaPago: '2024-05-18',
    monto: 9000.00, // 6 meses
    cantidadMeses: 6,
    fechaComienzoCobertura: '2024-06-01',
    fechaFinCobertura: '2024-11-30'
  },
  { 
    numeroRecibo: '006',
    fechaPago: '2024-06-25',
    monto: 1500.00, // 1 mes
    cantidadMeses: 1,
    fechaComienzoCobertura: '2024-07-01',
    fechaFinCobertura: '2024-07-31'
  }
];

const TablaDatos = () => {
  // Ordenar datos por fechaPago (más reciente primero)
  const datosOrdenados = [...datos].sort((a, b) => new Date(b.fechaPago) - new Date(a.fechaPago));

  return (
    <table >
      <thead>
        <tr>
          <th>Número de Recibo</th>
          <th>Fecha de Pago</th>
          <th>Monto</th>
          <th>Cantidad de Meses Pagados</th>
          <th>Fecha Comienzo Cobertura</th>
          <th>Fecha Fin Cobertura</th>
        </tr>
      </thead>
      <tbody>
        {datosOrdenados.map((fila) => (
          <tr key={fila.numeroRecibo}>
            <td style={{ textAlign: 'center' }}>{fila.numeroRecibo}</td>
            <td style={{ textAlign: 'center' }}>{fila.fechaPago}</td>
            <td style={{ textAlign: 'center' }}>{fila.monto}</td>
            <td style={{ textAlign: 'center' }}>{fila.cantidadMeses}</td>
            <td style={{ textAlign: 'center' }}>{fila.fechaComienzoCobertura}</td>
            <td style={{ textAlign: 'center' }}>{fila.fechaFinCobertura}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDatos;
