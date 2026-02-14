import "./Login.css";
import Logo from "../../assets/logoapp.jpg";
import { Link, useNavigate } from "react-router-dom";

const PassPage = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/");
    }
    return (
        <>
            <div className="sub-main">
                <a href="/" className="icon-container"><img src={Logo} alt="logo" /></a><h3>Iniciar sesión</h3>
                <form onSubmit={handleSubmit}>
                    <section className="my-form-floating">
                        <section className="form-dt">
                        <label htmlFor="floatingInput">Contraseña</label>
                        <input type="text" className="form-control" id="floatingInput" placeholder="Contraseña" required /></section>
                        <button type="submit">Iniciar sesión</button>
                    </section>
                    <Link to="/nuevousuario" className="link">Registrarme</Link>
                </form>
                <section className="adviser">
                            <p>Al iniciar sesión, aceptas las <a href="/conditions">Condiciones de uso</a> y el <a href="/privacy">Aviso de privacidad</a> de este sitio</p>
                            <br />
                            <a href="#">¿Necesitas ayuda?</a>
                            <p className="copyright">© 2025–2026</p>
                        </section>
            </div>

        </>
    )
}

export default PassPage;