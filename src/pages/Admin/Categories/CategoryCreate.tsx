import '../AdminStyle.css';
import { useState } from 'react';


const CategoryCreate = () => {
  const [categoryName, setCategoryName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!categoryName.trim()) return;

    const data = { name: categoryName };

    try {
      const response = await fetch('https://localhost:7104/api/category/adm/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setMessage('Categoría creada correctamente');
        setCategoryName('');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'No se pudo crear'}`);
      }
    } catch (error) {
      setMessage('Error al conectar con la API');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h3>Crear una categoría</h3>
      <form onSubmit={handleSubmit}>
        <section className="form-data">
          <label>Categoría</label>
          <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder='Categoría' required />
        </section>

        <button type="submit">Crear categoría</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CategoryCreate;
