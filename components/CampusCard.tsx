// components/CampusCard.tsx
import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Bus, Utensils, Info } from 'lucide-react'; 
import { Campus } from '@/data/campuses'; 

interface CampusCardProps {
  campus: Campus;
}

export const CampusCard = ({ campus }: CampusCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100">
      
      {/* Фотография */}
      <div className="relative h-48 w-full bg-gray-200">
        <img 
          src={campus.image} 
          alt={campus.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
          {campus.institutes.map((inst, idx) => (
            <span key={idx} className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md opacity-90">
              {inst}
            </span>
          ))}
        </div>
      </div>

      {/* Контент */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{campus.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{campus.description}</p>
        
        {/* Детали */}
        <div className="space-y-3 text-sm text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0" />
            <span>{campus.address}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-blue-500 shrink-0" />
            <span>{campus.workingHours}</span>
          </div>
          <div className="flex items-start">
            <Bus size={16} className="mr-2 text-blue-500 mt-0.5 shrink-0" />
            <span>Авт: {campus.busRoutes.join(', ')}</span>
          </div>
          
          {/* 👇 ИЗМЕНЕННАЯ ЧАСТЬ */}
          <div className={`flex items-center font-medium ${campus.hasDining ? 'text-green-700' : 'text-red-600'}`}>
            <Utensils size={16} className="mr-2" />
            <span>
              {campus.hasDining ? 'Есть столовая' : 'Столовой нет'}
            </span>
          </div>
          {/* 👆 КОНЕЦ ИЗМЕНЕНИЙ */}

        </div>

        {/* Кнопки */}
        <div className="space-y-6 pt-2">
            <a 
              href={campus.geoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
            >
              <MapPin size={18} />
              Показать маршрут
            </a>

            <Link 
              href={`/institutes/${campus.id}`} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
            >
              <Info size={18} />
              Подробнее про институт
            </Link>
        </div>

      </div>
    </div>
  );
};