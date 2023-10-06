import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item, quantity) => {
        const addItem = { ...item, quantity };
        const newCart = [...cart];

        const inTheCart = newCart.find((product) => product.id === addItem.id);

        if (inTheCart) {
            inTheCart.quantity += quantity;
        } else {
            newCart.push(addItem)
        }
        setCart(newCart)
    }

    const quantityInCart = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    }

    const removeProduct = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    }

    const deleteCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, addToCart, deleteCart, removeProduct, quantityInCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
};


