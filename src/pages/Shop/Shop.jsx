import React, { useState } from 'react'
import './shop.css'
import { productData } from '../../data'
import { BsSearch } from 'react-icons/bs'
import Products from '../../components/Products/Products'


const Shop = () => {
    const [products, setProducts] = useState(productData)
    return (
        <div className="shop-wrapper">
            <div className="filter-section">
                <div className="search">
                    <input type="search" placeholder="Search Products" />
                    <BsSearch />
                </div>
                <div className="productCategories-section">
                    <h3>Product Categories</h3>
                </div>
            </div>
            <div className="products-section">
                <Products products={products}/>
            </div>
        </div>
    )
}

export default Shop