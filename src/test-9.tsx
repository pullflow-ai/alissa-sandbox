import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  age?: number; // Optional field
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState<string>();
  const [newUserAge, setNewUserAge] = useState<number | undefined>(); // Potential undefined issue

  const addUser = () => {
    if (!newUserName || newUserName.trim() === "") {
      alert("User name is required!");
      // Missing return statement, so the function continues executing
    }

    const newUser: User = {
      id: users.length + 1,
      name: newUserName, // Logic error: newUserName could still be undefined here
      age: newUserAge // Undefined will be passed if not provided
    };

    setUsers([...users, newUser]);
    setNewUserName(''); // Inconsistent state update
    setNewUserAge(null); // Error: null is not allowed with the type number | undefined
  };

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Enter user name"
        value={newUserName} // Potential issue: uncontrolled to controlled input
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter user age"
        value={newUserAge || ''} // Converts undefined to empty string, causing issues with number input
        onChange={(e) => setNewUserAge(parseInt(e.target.value))}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age ? user.age : 'No age provided'}
            {/* Age display logic assumes age is a number or undefined */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
