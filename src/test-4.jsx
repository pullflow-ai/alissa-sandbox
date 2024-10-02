import React, { useState, useEffect } from 'react';

// Intentionally missing props validation
const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Intentionally missing dependency array for useEffect
  useEffect(() => {
    if (!products.length) {
      // Intentional logic error: trying to access products.length when products could be undefined
      console.log("No products available");
    } else {
      setFilteredProducts(products);
    }
  });

  const handleSearch = () => {
    // Possible typo: 'searchTerm.trim().lenght' should be 'length'
    if (searchTerm.trim().lenght === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => 
        product.name.includes(searchTerm)
      ));
    }
  };

  // Potential issue: key should be unique, using index might cause issues
  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product.name}</li> {/* Key issue */}
        ))}
      </ul>
    </div>
  );
}

// Missing export statement
