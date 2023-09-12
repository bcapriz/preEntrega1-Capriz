import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ Item }) {
    return (
        <div className="item-detail">
            <img src={Item.image} alt={Item.title} />
            <h3>{Item.title}</h3>
            <p>{Item.description}</p>
            <p>Precio: ${Item.price}</p>
            <ItemCount />
        </div>
    );
}
export default ItemDetail;


