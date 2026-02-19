import '../AdminStyle.css';
import { useState } from 'react';

const ProviderCreate = () => {
    const [providerName, setProviderName] = useState('');
    const [providerCode, setProviderCode] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();


        if (!providerName.trim() || !providerCode.trim()) return;

        const data = {
            name: providerName,
            code: providerCode
        };

        try {
            const response = await fetch('https://localhost:7104/api/provider/adm/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setMessage('Proveedor creado exitosamente');
                setProviderName('');
                setProviderCode('');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message || 'Error al crear el proveedor'} `);
            }
        }
        catch (error) {
            setMessage('Error al conectar con la API');
            console.log(error);
        }
    }


    return (
        <>
            <div className="form-container">
                <h3>Crear proveedor</h3>
                <form onSubmit={handleSubmit}>
                    <section className="form-data">
                        <label htmlFor="" >Nombre</label>
                        <input type="text" value={providerName} onChange={(e) => setProviderName(e.target.value)} placeholder='Nombre del proveedor' required />
                    </section>
                    <section className="form-data">
                        <label htmlFor="">Código</label>
                        <input type="text" value={providerCode} onChange={(e) => setProviderCode(e.target.value)} placeholder='Código del proveedor' required />
                    </section>

                    <button type='submit' className='submit-button'>Crear producto</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </>
    );

}

export default ProviderCreate;