import React,{ useState} from 'react'
import Product from '../SingleProduct/Product'
import './products.css'
import {productData} from '../../data'
const Products = () => {
    const [products,setProducts]=useState(productData)
    return (
        <div>
            <Product products={products}/>
        </div>
    )
}

export default Products