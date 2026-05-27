import React from 'react';
import { useCart } from './CartContext';

function Cart(){
    const {cart, removeFromCart} = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div className='cart'>
            <h2 className='text-center'>Кошик</h2>
            {cart.length === 0 ? (
                <p className='text-center'>Кошик порожній</p>
            ) : (
                <div>
                    <p className='text-center'>
                        Кількість товарів у кошику: {cart.length}
                    </p>
                    <ul className='list-group'>
                        {cart.map((item, index) => (
                        <li key={index}
                            className='list-group-item d-flex justify-content-between align-items-center'>
                          <span>{item.name} - {item.price} грн</span>
                          <button className='btn btn-danger btn-sm' onClick={() =>
                            removeFromCart(index)}>
                                Видалити
                            </button>
                        </li>
                        ))}
                    </ul>
                    <h4 className='text-center mt-3'>
                        Всього: {total} грн
                    </h4>
                </div>
            )}
        </div>
    );
}

export default Cart;