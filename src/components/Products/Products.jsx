import React,{ useState} from 'react'
// import Product from '../SingleProduct/Product'
import './products.css'
// import {productData} from '../../data'
const Products = ({products}) => {
    // const [products,setProducts]=useState(productData);
    console.log(products);
    return (
        <div className='prodects-wrapper'>
            {products.map((product) =>
                (<div key={product.id} className="product-item">
                    <img src={product.image} alt={product.description} />
                    <div className='product-description'>
                        <h3>{product.title}</h3>
                        <span>${product.price}</span>
                    </div>
                </div>))}
        </div>
    )
}

export default Products