import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h1 className="text-xl font-semibold mb-2">{name}</h1>
      <p className="text-gray-700 mb-2">Email: {email}</p>
      <div className="text-gray-700 mb-2">
        <strong>Address:</strong>
        <p>{address.street}, {address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
} ;

export default UserCard;