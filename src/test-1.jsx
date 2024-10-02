import React, { useState } from 'react';

const Header = ({ title }) => {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

const RandomList = ({ items }) => {
  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={index} style={styles.listItem}>{item}</li>
      ))}
    </ul>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.counter}>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={styles.button}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={styles.button}>Decrease</button>
    </div>
  );
};

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
        placeholder="Enter something"
      />
      <button type="submit" style={styles.submitButton}>Submit</button>
    </form>
  );
};

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [isModalOpen, setModalOpen] = useState(false);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div style={styles.container}>
      <Header title="Random JSX App" />
      <Counter />
      <Form onSubmit={addItem} />
      <RandomList items={items} />
      <button onClick={() => setModalOpen(true)} style={styles.button}>
        Open Modal
      </button>
      <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is a randomly generated modal.</p>
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    backgroundColor: '#f4f4f4',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '5px',
  },
  counter: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#61dafb',
    color: 'white',
    cursor: 'pointer',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#61dafb',
    color: 'white',
    cursor: 'pointer',
  },
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '20px',
    cursor: 'pointer',
  },
};

export default App;
