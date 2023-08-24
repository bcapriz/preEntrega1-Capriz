import cartLogo from "../assets/cart.svg"

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <button className="button-cart-widget"><img src={cartLogo} alt="cart-logo"/></button>
            <span className="cart-number">0</span>
        </div>

    )
}

export default CartWidget;

