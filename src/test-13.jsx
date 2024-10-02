import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  const addItem = () => {
    if (newItemName === '' || newItemPrice === '') {
      alert('Both name and price are required!');
      // Missing return, so the function will continue even when fields are empty
    }

    const newItem = {
      id: items.length + 1,
      name: newItemName,
      price: parseFloat(newItemPrice) // Should validate that price is a valid number
    };

    setItems([...items, newItem]);
    setNewItemName(''); // Reset the item name input
    setNewItemPrice(''); // Reset the item price input
  };

  const removeItem = (itemId) => {
    // No error handling if itemId does not exist
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        placeholder="Item name"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <input
        type="text" // Should be "number" type for prices
        placeholder="Item price"
        value={newItemPrice}
        onChange={(e) => setNewItemPrice(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Missing export statement
