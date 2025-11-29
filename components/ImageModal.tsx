// components/ImageModal.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
    images: string[];     // Массив всех ссылок на фото
    initialIndex: number; // С какого фото начать показ
    onClose: () => void;  // Функция закрытия окна
}

export const ImageModal = ({ images, initialIndex, onClose }: ImageModalProps) => {
    // Внутреннее состояние для отслеживания текущего фото в модалке
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Функции для переключения
    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation(); // Чтобы клик не закрыл модалку
        // Если это последнее фото, переходим на первое (зацикливаем)
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        // Если это первое фото, переходим на последнее
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Блокируем прокрутку основной страницы, пока открыта модалка
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        // При закрытии возвращаем прокрутку
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    // Если картинок нет, ничего не рисуем
    if (!images || images.length === 0) return null;

    return (
        // 1. Оверлей (Черный полупрозрачный фон на весь экран)
        // z-50 чтобы было поверх всего. Клик по фону закрывает окно.
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            
            {/* Кнопка Закрыть (X) справа сверху */}
            <button 
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                onClick={onClose}
            >
                <X size={32} />
            </button>


            {/* Контейнер для контента (Кнопка лево + Фото + Кнопка право) */}
            <div className="relative w-full max-w-6xl flex items-center justify-between h-full max-h-[90vh]">
                
                {/* Кнопка "Назад" (только если картинок больше 1) */}
                {images.length > 1 && (
                    <button 
                        className="text-white hover:text-gray-300 transition p-2 bg-black bg-opacity-20 hover:bg-opacity-50 rounded-full mr-4 shrink-0 hidden sm:block"
                        onClick={goToPrev}
                    >
                        <ChevronLeft size={48} />
                    </button>
                )}

                {/* Само Изображение */}
                {/* stopPropagation чтобы клик по картинке не закрывал модалку */}
                <div className="relative flex-grow flex items-center justify-center h-full" onClick={(e) => e.stopPropagation()}>
                   <img 
                       src={images[currentIndex]} 
                       alt={`Gallery image ${currentIndex + 1}`}
                       // object-contain гарантирует, что фото влезет целиком и не обрежется
                       className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                   />
                   {/* Счетчик фото снизу */}
                   <div className="absolute bottom-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                   </div>
                </div>

                {/* Кнопка "Вперед" */}
                 {images.length > 1 && (
                    <button 
                        className="text-white hover:text-gray-300 transition p-2 bg-black bg-opacity-20 hover:bg-opacity-50 rounded-full ml-4 shrink-0 hidden sm:block"
                        onClick={goToNext}
                    >
                        <ChevronRight size={48} />
                    </button>
                )}
            </div>
        </div>
    );
};