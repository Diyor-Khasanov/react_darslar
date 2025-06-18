import React from "react";

const products = [
  {
    id: 1,
    name: "Salt Crystals",
    price: 10,
    description: "Pure natural salt crystals from the mountains.",
    image: "salt1.jpg",
  },
  {
    id: 2,
    name: "Iodized Salt",
    price: 8,
    description: "Fine iodized salt for everyday use.",
    image: "salt2.jpg",
  },
  {
    id: 3,
    name: "Himalayan Pink Salt",
    price: 15,
    description: "Mineral-rich pink salt, hand-mined from the Himalayas.",
    image: "salt3.jpg",
  },
];

const App = () => {
  return (
    <div className="wrapper">
      {products.map((product) => (
        <div key={product.name} className="card">
          {product.name}
          {product.price}$
          {product.description}
        </div>
      ))}
    </div>
  );
};

export default App;
