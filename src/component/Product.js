import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Import the CSS file

const Product = ({ id, name, description, price, addToCart }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{description}</p>
          <p className="card-text">₱{price.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
