import React, { useState } from 'react'
import Modal from 'react-modal'
import './products.css'
const Products = ({ products }) => {
    const [product, setProduct] = useState('')

    const openModal = (product) => {
        setProduct(product)
    }

    const closeModal=()=>{
        setProduct(false)
    }

    return (
        <div className='prodects-wrapper'>
            {products.map((product) =>
            (<div key={product.id} className="product-item">
                <a href='#' onClick={() => openModal(product)}>
                    <img src={product.image} alt={product.description} />
                </a>
                <div className='product-description'>
                    <h3>{product.title}</h3>
                    <span>${product.price}</span>
                </div>
            </div>))}
            <Modal isOpen={product}>
                <span className='close-icon' onClick={closeModal}> &times; </span>
                <div className='product-description-modal'>
                    <div className='product-img'>
                        <img src={product.image} alt={product.description} />
                    </div>
                    <div className='product-info'>
                        <h2>{product.title}</h2>
                        <h4>SKU: {product.SKU}</h4>
                        <h4>Price: ${product.price}</h4>
                        <h5>{product.description}</h5>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Products