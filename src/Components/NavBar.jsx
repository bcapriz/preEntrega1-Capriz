import CartWidget from "./CartWidget"
import logo from './../assets/logo.png'


export const NavBar = () => {
    return (
        <section className="navbar">
            <div className="navbar-left">
                <h1><img src={logo} alt="logo fit one" className="logo" /></h1>
                <div>
                    <ul className="nav-list">
                        <li className="nav-item"><a className="nav-link" href="">Asociate</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Pase de prueba</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Sucursales</a> </li>
                        <li className="nav-item"><a className="nav-link" href="">Entrenamiento</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Clases</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Novedades</a></li>
                        <li className="nav-item"><a className="nav-link" href="">Ayuda</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <CartWidget/>
                </div>
            </div>

        </section >
    )
}