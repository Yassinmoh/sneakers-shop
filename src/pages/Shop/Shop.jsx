import React, { useState } from 'react'
import './shop.css'
import { productData } from '../../data'
import Products from '../../components/Products/Products'
import Filter from '../../components/Filter/Filter'


const Shop = () => {
    const [products, setProducts] = useState(productData)
    return (
        <div className="shop-wrapper">
            <div className="filter-section">
                <Filter />
            </div>
            <div className="products-section">
                <Products products={products}/>
            </div>
        </div>
    )
}

export default Shop