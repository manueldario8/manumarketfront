import "./Login.css";
import Logo from "../../assets/logoapp.jpg"

const Login = () => {
    return (
        <>
            <main className="login-main-container">
                <div className="sub-main">
                    <form>
                        <a href="/" className="icon-container"><img src={Logo} alt="logo" /></a>
                        <h3>Inicia sesión o crea una cuenta</h3>
                        <section className="my-form-floating">
                            <label htmlFor="floatingInput">Introduce el correo electrónico</label>
                            <input type="email" className="form-control" id="floatingInput" placeholder="Correo" />
                            <button className="goToIdentify">Continuar</button>
                        </section>
                        <section className="adviser">
                            <p>Al continuar, aceptas las <a href="/conditions">Condiciones de uso</a> y el <a href="/privacy">Aviso de privacidad</a> de este sitio</p>
                            <br />
                            <a href="#">¿Necesitas ayuda?</a>
                        </section>
                        <a className="registerLink" href="">Registrarme</a>
                        <p className="copyright">© 2025–2026</p>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;