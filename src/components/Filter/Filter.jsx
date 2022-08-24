import React from 'react'
import './filter.css'
import { BsSearch } from 'react-icons/bs'
const Filter = ({products,sort,size,handleFilterByOrder,handleFilterBySize}) => {
    return (
        <>
            <div className="search">
                <input type="search" placeholder="Search Products" />
                <BsSearch />
            </div>
            <div className="productFilterTyps-section">
                <h5 className="num-of-products">Number of Products : {products.length}</h5>
                <div className="filter-by-size">
                    <span>filter by size: </span>
                    <select value={size} className="filter-select" onChange={handleFilterBySize}>
                        <option value="all">All</option>
                        <option value="x">X</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </div>
                <div className="filter-by-order">
                    <span>filter by order: </span>
                    <select value={sort} className="filter-select" onChange={handleFilterByOrder}>
                        <option value="lastes">Lastes</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filter