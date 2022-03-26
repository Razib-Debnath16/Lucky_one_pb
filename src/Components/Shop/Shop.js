import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-containers">
                {
                    products.map(product => <Product key={product.id} product={product} cart={() => handleAddToCart(product)}></Product>)
                }
            </div>
            <div className="cart-containers">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;