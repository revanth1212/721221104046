import React from 'react';

const ProductBox = ({ name, type, rating, stock }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Rating: {rating}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};


const productSchema = [
  {
    name: "product1",
    type: "electronics",
    rating: 5,
    stock: "Available"
  },
  {
    name: "product2",
    type: "computer",
    rating: 4,
    stock: "Available"
  },
  {
    name: "product3",
    type: "mobile",
    rating: 4.5,
    stock: "Out of stock"
  },
  {
    name: "product4",
    type: "electronics",
    rating: 3.9,
    stock: "Available"
  }
];


const App = () => {
  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productSchema.map((product, index) => (
          <ProductBox
            key={index}
            name={product.name}
            type={product.type}
            rating={product.rating}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
