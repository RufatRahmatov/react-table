import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import './App.scss';

const initialUsers = [
  { id: 1, name: 'Esthera Jackson', function: 'Manager', review: 'Positive', email: 'esthera@simmmple.com', employed: '14/06/21', profilePic: null },
  { id: 2, name: 'Alexa Liras', function: 'Programmer', review: 'Positive', email: 'alexa@simmmple.com', employed: '14/06/21', profilePic: null },
  { id: 3, name: 'Laurent Michael', function: 'Executive', review: 'Neutral', email: 'laurent@simmmple.com', employed: '14/06/21', profilePic: null },
  { id: 4, name: 'Freduardo Hill', function: 'Manager', review: 'Positive', email: 'freduardo@simmmple.com', employed: '14/06/21', profilePic: null },
  { id: 5, name: 'Daniel Thomas', function: 'Programmer', review: 'Negative', email: 'daniel@simmmple.com', employed: '14/06/21', profilePic: null },
  { id: 6, name: 'Mark Wilson', function: 'Designer', review: 'Positive', email: 'mark@simmmple.com', employed: '14/06/21', profilePic: null },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleFileChange = (event, userId) => {
    const file = event.target.files[0];
    setUsers(users.map(user => (user.id === userId ? { ...user, profilePic: file } : user)));
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/user-form" element={<UserForm addUser={addUser} />} />
        <Route path="/user-table" element={<UserTable users={users} deleteUser={deleteUser} handleFileChange={handleFileChange} />} />
        <Route path="/" element={<UserForm addUser={addUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
