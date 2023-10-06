import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';


const ItemDetail = ({ product }) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const useOnAdd = (quantity) => {
    setCartQuantity(quantity)

    const item = {
      id: product.id,
      title: product.title,
      price: Number(product.price)
    }

    addToCart(item, Number(quantity))
  }

  return (
    <div className="item-detail">
      {product ? (
        <div>
          <img src={product.image} width={260} alt={product.title} />
          <hr className='separator-line-details' />
          <h3>{product.title}</h3>
          <p>{product.description} <strong>Categoria:</strong> {product.category}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ) : null
      }
      {product ? (
        cartQuantity > 0 ? (
          <NavLink to='/cart'><button>Finalizar compra</button></NavLink>
        ) : (
          <ItemCount stock={product.stock} onAdd={useOnAdd} />
        )
      ) : null
      }
    </div>
  );
}

export default ItemDetail;



