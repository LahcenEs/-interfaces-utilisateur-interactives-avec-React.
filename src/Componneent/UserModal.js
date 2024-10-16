import React from 'react';

const UserModal = ({ show, onClose, user }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Détails de l'utilisateur</h2>
        <p><strong>Nom :</strong> {user.name}</p>
        <p><strong>Âge :</strong> {user.age}</p>
        <p><strong>Accès :</strong> {user.haveAccess ? 'True' : 'False'}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default UserModal;