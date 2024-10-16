import React, { useState } from 'react';
import Table from './Table';
import UserModal from './UserModal';

const Home = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Mustapha', age: 28, haveAccess: true },
    { id: 2, name: 'Ali', age: 22, haveAccess: false },
    { id: 3, name: 'Sara', age: 30, haveAccess: true },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Liste des utilisateurs</h1>
      <Table data={users} onDelete={handleDelete} onView={handleView} />
      <UserModal show={showModal} onClose={closeModal} user={selectedUser} />
    </div>
  );
};

export default Home;