import CartWidget from "./CartWidget";
import logo from './../assets/logo.png';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <section className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="logo fit one" className="logo" />
                </Link>

                <div>
                    <ul className="nav-list">
                        <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/men">Hombres</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/woman">Mujeres</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/category/sale">Sale</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/accessories">Accesorios</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/category/supplements">Suplementos</Link></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <CartWidget />
                </div>
            </div>

        </section >
    )
}