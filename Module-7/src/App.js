import './App.css';
import React from 'react';
import UserTable from './UserTable';

const users = [
  { id: 1, name: 'dheeraj', email: 'dheeraj.mathur.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  
];

const App = () => {
  return (
    <div className='app'>
      <h1>User Management</h1>
      <UserTable users={users} />
    </div>
  );
};

export default App;
