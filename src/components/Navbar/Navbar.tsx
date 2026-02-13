import './Navbar.css';
import logo from "../../assets/logoapp.jpg";

const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
        <div className="inner-navbar-container">
            <div className='top-inner-navbar-container'>
                <div className='div-logo-container'>
                    <a href=""><img src={logo} alt="Logo"/></a>
                </div>
                <div className='search-bar-container'>
                    <section className='search-bar'>
                        <input type="search" name="" id="" className='search-input' placeholder='Buscar productos, marcas y más...'/>
                    </section>
                    <section className='search-btn'><button type="button"><i className='fas fa-search'></i></button>
                    </section>
                </div>
                <div className='ad-container'>
                    <p>Envío gratis en tu primera compra</p>
                </div>
            </div>
            <div className='bottom-inner-navbar-container'>
                <section className='location-container'>
                    <p>Buenos Aires, Argentina</p>
                </section>
                <section className='options-container'>
                    <ul>
                        <li>
                        <select className='options'>
                            <option>Categorías</option>
                            <option>Cocina</option>
                            <option>Deco & Home</option>
                            <option>Baño</option>
                            <option>Mates</option>
                            <option>Living</option>
                            <option>Accesorios</option>
                            <option>Sombreros</option>
                            <option>Electrónica</option>
                        </select>
                        </li>
                        <li><a href="">Ofertas</a></li>
                        <li><a href="">Últimos ingresos</a></li>
                        <li><a href="">Cupones</a></li>
                    </ul>
                </section>
                <section className='user-options-container'>
                    <ul>
                        <li><a href="/login">Ingresar</a></li>
                        <li><a href="/login">Crear cuenta</a></li>
                        <li><a href="">Mis compras</a></li>
                        <li><a href=""><i className='fas fa-shopping-cart'></i></a></li>
                    </ul>
                </section>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Navbar;