import React from 'react';
import ProductCard from './ProductCard';

function ProductList () {
    const products = [
        {id: 1, name: 'Еспрессо', price: 30},
        {id: 2, name: 'Капучино', price: 40},
        {id: 3, name: 'Тістечко Медове', price: 30},
        {id: 4, name: 'Морозиво Каштан', price: 40},
        {id: 5, name: 'Спрайт 1,250л.', price: 35},
    ]
    return (
        <div>
            <h2 className='text-center mb-5'>Список товарів</h2>
            <div className='d-flex gap-5 justify-content-center flex-wrap'>
                {products.map((product) =>(
                    <ProductCard key = {product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ProductList;