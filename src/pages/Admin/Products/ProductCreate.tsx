import '../AdminStyle.css';
import { useState, useEffect } from 'react';

type Category = {
  id: number;
  name: string;
};

const ProductCreate = () => {
  const [providerCode, setProviderCode] = useState('');
  const [productCode, setProductCode] = useState('');
  const [categoryId, setCategoryId] = useState<number>(0);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [imageProduct, setImageProduct] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !providerCode.trim() ||
      !productCode.trim() ||
      !productName.trim() ||
      categoryId === 0 ||
      price <= 0 ||
      stock < 0
    ) {
      setMessage('Complete correctamente los campos obligatorios');
      return;
    }

    const formData = new FormData();

    formData.append("ProviderCode", providerCode);
    formData.append("ProductCode", productCode);
    formData.append("CategoryId", categoryId.toString());
    formData.append("Name", productName);
    formData.append("Price", price.toString());
    formData.append("Stock", stock.toString());

    if (description.trim()) {
      formData.append("Description", description);
    }

    if (imageProduct) {
      formData.append("Image", imageProduct);
    }

    try {
      const response = await fetch("https://localhost:7104/api/product/adm", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setMessage('Producto creado exitosamente');
        setProviderCode('');
        setProductCode('');
        setCategoryId(0);
        setProductName('');
        setDescription('');
        setPrice(0);
        setStock(0);
        setImageProduct(null);

      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Error al crear el producto');
      }

    } catch (error) {
      setMessage('Error al conectar con la API');
      console.error(error);
    }
  };

  useEffect(() => {
    fetch("https://localhost:7104/api/category/adm")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(() => setMessage('Error cargando categorías'));
  }, []);

  return (
    <div className="form-container">
      <h3>Crear un producto</h3>

      <form onSubmit={handleSubmit}>
        <section className="form-data">
          <label>Código del proveedor</label>
          <input
            type="text"
            value={providerCode}
            onChange={(e) => setProviderCode(e.target.value)}
            required
          />
        </section>

        <section className="form-data">
          <label>Código del producto</label>
          <input
            type="text"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            required
          />
        </section>

        <section className="form-data">
          <label>Categoría</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(Number(e.target.value))}
          >
            <option value={0}>Seleccione categoría</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </section>

        <section className="form-data">
          <label>Nombre</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </section>

        <section className="form-data">
          <label>Descripción</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>

        <section className="form-data">
          <label>Precio</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </section>

        <section className="form-data">
          <label>Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            required
          />
        </section>

        <section className="form-data">
          <label>Seleccione una foto</label>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImageProduct(e.target.files[0]);
              }
            }}
          />
        </section>

        <button type='submit' className='submit-button'>Crear producto</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductCreate;
