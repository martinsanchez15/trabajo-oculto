import React, {  useEffect } from 'react';

const Form = ({ addRecord, isEditing, formData, setFormData }) => {
  useEffect(() => {
    if (isEditing) {
      setFormData(formData);
    }
  }, [isEditing, formData, setFormData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(formData);
    setFormData({
      comercio: '',
      itemEvaluar: '',
      nombre: '',
      fecha: '',
      calificacion: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="comercio" value={formData.comercio} onChange={handleChange}>
        <option value="">Seleccione Comercio</option>
        <option value="Havanna">Havanna</option>
        <option value="Antares">Antares</option>
        <option value="Mc Donald's">Mc Donald's</option>
        <option value="Craft">Craft</option>
      </select>
      <select name="itemEvaluar" value={formData.itemEvaluar} onChange={handleChange}>
        <option value="">Seleccione Ítem a Evaluar</option>
        <option value="Limpieza">Limpieza</option>
        <option value="Comida">Comida</option>
        <option value="Atención en gral.">Atención en gral.</option>
        <option value="Tiempos">Tiempos</option>
      </select>
      <input type="text" name="nombre" placeholder="Nombre y Apellido" value={formData.nombre} onChange={handleChange} />
      <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
      <input type="number" name="calificacion" placeholder="Calificación (1-5)" value={formData.calificacion} onChange={handleChange} min="1" max="5" />
      <button type="submit">{isEditing ? 'Aceptar' : 'Agregar'}</button>
    </form>
  );
};

export default Form;


