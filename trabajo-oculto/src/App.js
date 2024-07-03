import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';
import './App.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [formData, setFormData] = useState({
    comercio: '',
    itemEvaluar: '',
    nombre: '',
    fecha: '',
    calificacion: ''
  });

  const addRecord = (record) => {
    if (isEditing) {
      const updatedRecords = records.map((r, index) => (index === currentIndex ? record : r));
      setRecords(updatedRecords);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setRecords([...records, record]);
    }
  };

  const editRecord = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setFormData(records[index]);
  };

  const deleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
    if (isEditing && index === currentIndex) {
      setIsEditing(false);
      setFormData({
        comercio: '',
        itemEvaluar: '',
        nombre: '',
        fecha: '',
        calificacion: ''
      });
    }
  };

  return (
    <div className="App">
      <h1>Cliente Oculto</h1>
      <Form 
        addRecord={addRecord} 
        isEditing={isEditing} 
        formData={formData} 
        setFormData={setFormData} 
      />
      <Table 
        records={records} 
        editRecord={editRecord} 
        deleteRecord={deleteRecord} 
      />
    </div>
  );
};

export default App;


