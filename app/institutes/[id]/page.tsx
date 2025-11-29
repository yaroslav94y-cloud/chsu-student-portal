// app/institutes/[id]/page.tsx
"use client";

// 1. 🔥 ДОБАВЛЯЕМ import { use }
import React, { useState, use } from 'react'; 
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon, Users, AlertTriangle } from 'lucide-react';
import { institutesDatabase } from '@/data/mockInstitute'; 
import { LecturerCard } from '@/components/LecturerCard';
import { ImageModal } from '@/components/ImageModal';

// 2. 🔥 Изменяем типизацию params (он теперь Promise)
export default function InstitutePage({ params }: { params: Promise<{ id: string }> }) {
  
  // 3. 🔥 "Распаковываем" params с помощью use()
  // Это заменяет старое const instituteId = params.id;
  const resolvedParams = use(params);
  const instituteId = resolvedParams.id;
  
  // Дальше всё остается как было...
  const currentInstitute = institutesDatabase[instituteId];

  // --- STATE ДЛЯ ГАЛЕРЕИ ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // ... (весь остальной код без изменений) ...

  // 🛡️ ЗАЩИТА: Если ID не найден
  if (!currentInstitute) {
     // ... код ошибки ...
     return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <AlertTriangle size={64} className="text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Институт не найден</h1>
            <p className="text-gray-600 mb-6">Данные для ID "{instituteId}" пока нет.</p>
            <Link href="/campuses" className="text-blue-600 hover:underline">Вернуться к списку</Link>
        </div>
    );
  }

  const { name, description, gallery, lecturers } = currentInstitute;

  return (
    // ... ваш JSX код ...
    <div className="min-h-screen bg-gray-50 pb-20 relative">
        {/* ... */}
        {/* В блоке return ничего менять не нужно */}
        <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link 
                href="/campuses" 
                className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors font-semibold text-sm mb-4"
            >
                <ArrowLeft size={16} className="mr-1" />
                Вернуться к корпусам
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {name}
            </h1>
            <p className="mt-2 text-gray-600 max-w-2xl">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* ГАЛЕРЕЯ */}
        <section className="mb-32">
            <div className="flex items-center mb-6">
                <ImageIcon className="text-blue-600 mr-3" size={28} />
                 <h2 className="text-2xl font-bold text-gray-800">Фотогалерея</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96 md:h-[500px]">
                <div className="md:col-span-3 h-full rounded-2xl overflow-hidden relative group cursor-pointer" onClick={() => openModal(0)}>
                    <img src={gallery[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="hidden md:flex flex-col gap-4 h-full">
                     <div className="flex-1 rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => openModal(1)}>
                        <img src={gallery[1]} alt="Img 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                     </div>
                     <div className="flex-1 rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => openModal(2)}>
                        <img src={gallery[2]} alt="Img 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                     </div>
                     <div className="flex-1 rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => openModal(3)}>
                        <img src={gallery[3]} alt="Img 4" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold hover:bg-opacity-30 transition">
                            + ещё фото
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* ПРЕПОДАВАТЕЛИ */}
        <section>
            <div className="flex items-center mb-8">
                <Users className="text-blue-600 mr-3" size={28} />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Наши преподаватели</h2>
                     <p className="text-gray-600">Ключевые лица института.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {lecturers.map((lecturer) => (
                    <LecturerCard key={lecturer.id} lecturer={lecturer} />
                ))}
            </div>
        </section>
      </div>

      {isModalOpen && (
        <ImageModal 
            images={gallery} 
            initialIndex={selectedImageIndex} 
            onClose={() => setIsModalOpen(false)} 
        />
      )}
        {/* ... */}
    </div>
  );
}