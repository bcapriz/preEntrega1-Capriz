import React, { useState } from 'react';

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const incrementCount = ({ }) => {
    if (count < stock) setCount(count + 1);
  };

  const decrementCount = ({ }) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <div className='container-count'>
      <div className='button-count'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <button className="custom-btn buttom-view-more" onClick={() => onAdd (count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount