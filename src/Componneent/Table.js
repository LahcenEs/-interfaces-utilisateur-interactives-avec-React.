import React from 'react';

const Table = ({ data, onDelete, onView }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Age</th>
          <th className="py-2 px-4">Have Access</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="border-t">
            <td className="py-2 px-4">{user.name}</td>
            <td className="py-2 px-4">{user.age}</td>
            <td className="py-2 px-4">
              <span className={`text-white py-1 px-3 rounded-full ${user.haveAccess ? 'bg-green-500' : 'bg-red-500'}`}>
                {user.haveAccess ? 'True' : 'False'}
              </span>
            </td>
            <td className="py-2 px-4">
              <button className="mr-2 text-blue-500" onClick={() => onView(user)}>
                Voir
              </button>
              <button className="text-red-500" onClick={() => onDelete(user.id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;