import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalPrice, deleteCart, removeProduct } = useContext(CartContext);

    const useDelete = () => {
        deleteCart();
    }

    return (
        <div className="container-cart">
            <h1 className="main-tittle">Carrito</h1>

            {cart.map((product) => (
                <div className="item-cart" key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Precio por unidad: ${product.price}</p>
                    <p>Precio Total: ${product.price * product.quantity}</p>
                    <p>Cantidad: {product.quantity}</p>  
                    <button onClick={() => removeProduct(product.id)}>Eliminar Producto</button>
                    <p className="separator-cart"></p>
                </div>
            ))}

            {cart.length > 0 ? (
                <div className="cart-buttons">
                    <h2>Precio Total: ${totalPrice()}</h2>
                    <button onClick={useDelete}>Vaciar</button>
                    <br />
                    <Link to='/checkout'><button>Finalizar compra</button></Link>
                </div>
            ) : (
                <h2>El carrito se encuentra vacío. </h2>
            )}
        </div>
    );
}

export default Cart;
