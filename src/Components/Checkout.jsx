import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState('');
    const { cart, totalPrice, deleteCart } = useContext(CartContext);

    const createOrder = () => {
        const db = getFirestore();
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            products: cart,
            date: new Date(),
            total: parseFloat({ totalPrice })
        };

        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order)
            .then((res) => setOrderId(res.id))
            .catch((error) => {
                console.error("Error al agregar el documento a Firestore:", error);
            });

        deleteCart();
    };

    if (orderId) {
        return (
            <div className="post-buy">
                <h1>¡Gracias por tu compra!</h1>
                <h2>Tu id de pedido es ${orderId}</h2>
                <button><Link to="/">Ir al Catalogo</Link></button>
            </div>
        )
    }

    return (
        <div className="container-checkout">
            <h2>Ingresa tus datos para poder finalizar la compra.</h2>
            <form className="form-checkout">
                <label>NOMBRE:</label>
                <input type="text" className="input-checkout" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ingresa tu nombre completo" />
                <p className="form-separator"></p>
                <label>EMAIL:</label>
                <input type="text" className="input-checkout" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Ingresa tu email" />
                <p className="form-separator"></p>
                <label>TELEFONO:</label>
                <input type="text" className="input-checkout" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Ingresa tu numero de telefono" />
               <button className="btn-submit"onClick={createOrder}><Link to='/checkout'>Enviar</Link></button>
            </form>

        </div>
    )
}

export default Checkout;