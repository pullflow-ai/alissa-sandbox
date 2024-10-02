import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState();
  const [newProductPrice, setNewProductPrice] = useState<number>();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts(); // No function definition for fetchProducts
  }, []);

  const addProduct = () => {
    if (newProductName === '' || newProductPrice <= 0) {
      setError(true);
      alert('Product name and price are required!');
    }

    const newProduct: Product = {
      id: products.length + 1,
      name: newProductName,
      price: newProductPrice,
    };

    setProducts([...products, newProduct]);
    setNewProductName(''); // Resetting a number state with a string
    setNewProductPrice(undefined); // Invalid reset for price
  };

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Product Name"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(parseInt(e.target.value))}
      />
      <button onClick={addProduct}>Add Product</button>

      {error && <p>Error: Please fill out both name and price!</p>}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Missing default export
