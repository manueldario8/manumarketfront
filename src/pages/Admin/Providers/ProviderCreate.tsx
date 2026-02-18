import '../AdminStyle.css';

const ProviderCreate = () => {
    return (
        <>
            <div className="form-container">
                <h3>Crear proveedor</h3>
                <form action="">
                    <section className="form-data">
                        <label htmlFor="" >Nombre</label>
                        <input type="text" placeholder='Nombre del proveedor' required />
                    </section>
                    <section className="form-data">
                        <label htmlFor="">Código</label>
                        <input type="text" placeholder='Código del proveedor' required />
                    </section>

                    <button type='submit'>Crear producto</button>
                </form>
            </div>
        </>
    )
}

export default ProviderCreate;