// components/LecturerCard.tsx
import React from 'react';
import { Lecturer } from '@/data/mockInstitute';

interface Props {
    lecturer: Lecturer;
}

export const LecturerCard = ({ lecturer }: Props) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
      
      {/* Круглое фото */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-50 shadow-inner">
        <img 
            src={lecturer.image} 
            alt={lecturer.name}
            className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Имя и должность */}
      <h3 className="text-lg font-bold text-gray-800 mb-1">{lecturer.name}</h3>
      <p className="text-blue-600 text-sm font-medium mb-3">{lecturer.role}</p>
      
      {/* Описание */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {lecturer.bio}
      </p>
    </div>
  );
};