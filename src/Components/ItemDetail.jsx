import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <img src={product.image} width={580} alt={product.title} />
            <hr className='separator-line-details' />
            <h3>{product.title}</h3>
            <p>{product.description} <strong>Categoria:</strong> {product.category}</p>
            <p>Precio: ${product.price}</p>
            <ItemCount />
        </div>
    );
}

export default ItemDetail