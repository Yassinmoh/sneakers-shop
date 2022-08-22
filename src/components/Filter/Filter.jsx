import React from 'react'
import './filter.css'
import { BsSearch } from 'react-icons/bs'
const Filter = () => {
    return (
        <>
            <div className="search">
                <input type="search" placeholder="Search Products" />
                <BsSearch />
            </div>
            <div className="productFilterTyps-section">
                <h5 className="num-of-products">Number of Products : 12</h5>
                    <div className="filter-by-size">
                        <span>filter by size: </span>
                        <select className="filter-select">
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
                        <select className="filter-select">
                            <option value="lastes">Lastes</option>
                            <option value="lower">Lower</option>
                            <option value="highest">Lighest</option>
                        </select>
                    </div>
            </div>
        </>
    )
}

export default Filter