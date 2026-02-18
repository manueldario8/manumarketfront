import "./ProductList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
    Id : number,
    ProviderCode: string,
    ProductCode: string,
    CategoryId: number,
    Name: string;
    Description: string;
    UrlPhoto: string;
    Price: number;
    Stock: string;
};

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api-ten-jet.vercel.app/products");
                if (!response.ok) {
                    throw new Error("Error al cargar los productos")
                };

                const data = await response.json();
                setProducts(data);
            }
            catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
                else {
                    setError("Error desconocido");
                }
            }
        };
        fetchProducts();
    }, []);

    const handleImageClick = (id: number) => {
        navigate(`product/${id}`);
    }


    return (
        <>
            <div className="productList-container">
                <h2>Lista de productos:</h2>
                <section className="inner-productList-container">
                    <div className="products">
                        {error ? (<p className="error-message">{error}</p>) : products.length > 0 ? ( 
                            products.map((product) => (
                        <div className="product-card" key={product.Id}>
                            <img src={product.UrlPhoto} alt={product.UrlPhoto} className="product-image" onClick={() => handleImageClick(product.Id)} />

                            <h3>{product.Name}</h3>
                            <p>${product.Price}</p>
                            <p>{product.CategoryId}</p>
                            <p>{product.Description}</p>

                        </div>))) : (
                        <p className="no-results">No hay productos que coincidan con los filtros seleccionados</p>
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductList;