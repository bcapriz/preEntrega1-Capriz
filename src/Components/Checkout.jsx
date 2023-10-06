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
            total: parseFloat({totalPrice})
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
            <div>
                <h1>¡Gracias por tu compra!</h1>
                <h2>Tu id de pedido es ${orderId}</h2>
                <Link to="/"><button>Ir al Catalogo</button></Link>
            </div>
        )
    }

    return (
        <div className="container-checkout">
            <h2>Ingresa tus datos para poder finalizar la compra.</h2>
            <form className="form-checkout">
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <label>Email</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                <label>Telefono</label>
                <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </form>
            <Link to='/checkout'><button onClick={createOrder}>Finalizar compra</button></Link>
        </div>
    )
}

export default Checkout;