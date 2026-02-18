import '../AdminStyle.css';

const ProductCreate = () => {
  return (
    <>
    <div className="form-container">
      <h3>Crear un producto</h3>
      <form action="" encType="multipart/form-data">
        <section className="form-data">
          <label htmlFor="">Código del proveedor</label>
          <input type="text" required/>
        </section> 
        <section className="form-data">
          <label htmlFor="">Código del producto</label>
          <input type="text" required/>
        </section>
        <section className="form-data">
          <label htmlFor="">Categoría</label>
          <select name="" id="">
            <option value="">Ajustar para API</option>
          </select>
        </section>
        <section className="form-data">
          <label htmlFor="">Nombre</label>
          <input type="text" required/>
        </section>
        <section className="form-data">
          <label htmlFor="">Descripción</label>
          <input type="text"/>
        </section> 
        <section className="form-data">
          <label htmlFor="">Precio</label>
          <input type="number" required/>
        </section>
        <section className="form-data">
          <label htmlFor="">Stock</label>
          <input type="number" required/>
        </section>
        <section className="form-data">
          <label htmlFor="">Seleccione una foto</label>
          <input type="file" accept=".png,.jpg,.jpeg"/>
        </section>
        <button type='submit'>Crear producto</button>
      </form>
    </div>
    </>
  )
}

export default ProductCreate;