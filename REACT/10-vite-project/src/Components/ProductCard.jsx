import React from 'react';
import { useCart } from './CartContext';

function ProductCard ({product}) {
    const {addToCart} = useCart();

    return (
        <div className='border rounded p-5 text-center'
        style={{backgroundColor: 'white'}}>
          <h3>{product.name}</h3>
          <p>Ціна: {product.price} грн</p>
          <button className='btn btn-primary' onClick={() => addToCart(product)}>
            Додати в кошик
            </button>  
        </div>
    );
}

export default ProductCard;