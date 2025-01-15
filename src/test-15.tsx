import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState(''); // Error: should be number, not string

  const addProduct = () => {
    if (newProductName.trim() === '' || newProductPrice === '') {
      alert('Product name and price are required!');
      // Missing return here, so the function continues after the alert
    }

    const newProduct: Product = {
      id: products.length + 1,
      name: newProductName,
      price: parseFloat(newProductPrice) // Error: No validation that price is a valid number
    };

    setProducts([...products, newProduct]);
    setNewProductName(''); // Reset input field
    setNewProductPrice(''); // Reset input field, but it's a string instead of a number
  };

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
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
        type="text" // Error: should be number input
        placeholder="Product Price"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Missing default export statement
