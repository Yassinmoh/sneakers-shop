import React, { useState } from 'react'
import './shop.css'
import { productData } from '../../data'
import Products from '../../components/Products/Products'
import Filter from '../../components/Filter/Filter'


const Shop = () => {
    const [products, setProducts] = useState(productData)
    const [size, setSize] = useState('')
    const [sort, setSort] = useState('')


    const handleFilterBySize = (e) => {
        setSize(e.target.value);
        if(e.target.value === 'all'){
            setProducts(productData)
        }else{
            let productsClone=[...products];
            let newProducts=productsClone.filter(ele=>ele.size.indexOf(e.target.value) != -1)
            console.log("newProducts",newProducts);
            setProducts(newProducts)
        }
    }
    const handleFilterByOrder = (e) => {
        setSort(e.target.value);
    }


    return (
        <div className="shop-wrapper">
            <div className="filter-section">
                <Filter
                size={size}
                sort={sort}
                handleFilterByOrder={handleFilterByOrder}
                handleFilterBySize={handleFilterBySize}
                products={products}/>
            </div>
            <div className="products-section">
                <Products products={products}/>
            </div>
        </div>
    )
}

export default Shop