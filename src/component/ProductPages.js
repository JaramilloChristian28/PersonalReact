// ProductPages.js
import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Import the CSS file

const ProductPages = ({ products, addToCart }) => {
  return (
    <div>
      {/* Add the "My Cart" button outside the product cards */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/cart">
          <button className="btn btn-primary">My Cart</button>
        </Link>
      </div>
      {/* Add the "My Cart" button outside the product cards */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
      <div className="container">
        <div className="row"> 
          {products.map(product => (
            <div className="col-md-4" key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductPages;