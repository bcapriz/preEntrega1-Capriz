import { useContext } from "react";
import cartLogo from "../assets/cart.svg"
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
    const { quantityInCart } = useContext(CartContext)
    return (

        <div className="cart-widget">
            <button className="button-cart-widget"><img src={cartLogo} alt="cart-logo" /></button>
            <span className="cart-number">{quantityInCart()}</span>
            
        </div>

    )
}

export default CartWidget;