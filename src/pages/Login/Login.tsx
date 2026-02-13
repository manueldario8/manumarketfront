import "./Login.css"

const Login = () => {
    return (
        <>
            <main className="login-main-container">
                <div className="sub-main">
                <form>
                    <div className="icon-container"><i className="fa-solid fa-arrow-right-to-bracket"></i></div>
                    <h1>Iniciar sesión</h1>
                    <section className="my-form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Correo" />
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </section>
                    <section className="my-form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </section>
                    <section className="my-form-floating">
                        <input className="check-input" type="checkbox" value="remember-me" id="checkDefault" />
                        <label className="check-label" htmlFor="checkDefault">Recuérdame</label>
                    </section>
                    <section className="register">
                        <p>¿No tienes cuenta?</p>
                        <a href="">Registrarme</a>
                    </section>
                    <button type="submit">Iniciar sesión</button>
                    <p className="copy">© 2015–2026</p>
                </form>
                </div>
            </main>
        </>
    )
}

export default Login;