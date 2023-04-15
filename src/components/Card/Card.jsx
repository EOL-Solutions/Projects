import React, { useState, useEffect } from 'react';
import './Card.css';

function Card(props) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='card-container'>
      {productos.slice(0, 20).map(producto => (
        <div key={producto.id} className="card">
          <img src={producto.category.image} alt={producto.title} />
          <h2>{producto.title}</h2>
        
          <p>$ {producto.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Card;