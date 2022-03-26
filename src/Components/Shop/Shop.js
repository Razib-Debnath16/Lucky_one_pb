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
        if (cart.length === 4) {
            alert('You can only select four of them')
        }
        let count = 0;
        for (const id of cart) {
            if (id.id === product.id) {
                count++;

            }
        }
        if (count === 0 && cart.length < 4) {

            const newCart = [...cart, product];
            setCart(newCart);
        }

    }
    const handleAddToCart2 = () => {
        const newCart2 = [];
        setCart(newCart2);
        document.getElementById('select-random').style.display = 'none';
    }

    return (
        <div className='shop-container'>
            <div className="product-containers">
                {
                    products.map(product => <Product key={product.id} product={product} cart={() => handleAddToCart(product)}></Product>)
                }
            </div>
            <div className="cart-containers">
                <Cart cart={cart} data={handleAddToCart2}></Cart>
            </div>
        </div>
    );
};

export default Shop;