import React from 'react';
import ItemCount from './ItemCount';


export const ItemDetail = ({  }) => {
    return (
        <div className="item-detail">
            <img src={product.image} width={125} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>Precio: ${product.price}</p>
            <ItemCount />
        </div>
    );
}

