import React from "react";
import './ProductCard.css';
import {Link} from 'react-router-dom';


function ProductCard({id, name, price, description , image}) {
    return(
        <div className="product-card">
            <img src={image} alt={name}className="image-size"/>
            <h2>{name}</h2>
            <h1>₹{price}</h1>
            <p>{description}</p>
            <Link to={`/buy/${id}`}className="btn-buy-now">Buy Now</Link>
        </div>

        
    )
}

export default ProductCard