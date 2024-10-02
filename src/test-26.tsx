import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const addItem = () => {
    if (newItemName === '' || newItemPrice === '') {
      alert('Item name and price are required!');
    }
    const newItem = { name: newItemName, price: parseFloat(newItemPrice) };
    setItems(items.push(newItem)); // Incorrectly mutating state
    setNewItemName('');
    setNewItemPrice('');
  };

  const removeItem = (index) => {
    items.splice(index, 1); // Directly mutating state
    setItems(items);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Item name"
      />
      <input
        type="text"
        value={newItemPrice}
        onChange={(e) => setNewItemPrice(e.target.value)}
        placeholder="Item price"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Missing export default statement
