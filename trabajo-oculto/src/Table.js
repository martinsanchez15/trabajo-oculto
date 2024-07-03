import React from 'react';

const Table = ({ records, editRecord, deleteRecord }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Comercio</th>
          <th>Nombre</th>
          <th>Ítem Evaluado</th>
          <th>Fecha</th>
          <th>Calificación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.comercio}</td>
            <td>{record.nombre}</td>
            <td>{record.itemEvaluar}</td>
            <td>{record.fecha}</td>
            <td>{record.calificacion}</td>
            <td>
              <button onClick={() => editRecord(index)}>Editar</button>
              <button onClick={() => deleteRecord(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

