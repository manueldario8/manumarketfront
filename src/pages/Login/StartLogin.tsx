import "./Login.css";
import Logo from "../../assets/logoapp.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
    navigate("/pass");
  };

    return (
        <>
                <div className="sub-main">  
                        <a href="/" className="icon-container"><img src={Logo} alt="logo" /></a>
                        <h3>Inicia sesión o crea una cuenta</h3>
                        <form onSubmit={handleSubmit} className="my-form-floating ">
                        <section className="form-dt">
                            <label htmlFor="floatingInput">Introduce el correo electrónico</label>
                            <input type="email" className="form-control" id="floatingInput" placeholder="Correo" required/>
                        </section>    
                            <button type="submit">Continuar</button>
                        <section className="adviser">
                            <p>Al continuar, aceptas las <a href="/conditions">Condiciones de uso</a> y el <a href="/privacy">Aviso de privacidad</a> de este sitio</p>
                            <br />
                            <a href="#">¿Necesitas ayuda?</a>
                        </section>
                        <Link to="/nuevousuario" className="link">Registrarme</Link>
                        <p className="copyright">© 2025–2026</p>
                    </form>
                </div>

        </>
    )
}

export default Login;