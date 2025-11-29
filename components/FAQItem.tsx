// components/FAQItem.tsx

"use client"; // ЭТО ОЧЕНЬ ВАЖНО для интерактивных компонентов!

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '@/data/faq';

interface FAQItemProps {
  item: FAQItem;
}

export const FAQItemComponent = ({ item }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        {isOpen ? <Minus size={20} className="text-blue-600 shrink-0" /> : <Plus size={20} className="text-gray-400 shrink-0" />}
      </button>

      {/* Блок с ответом, который раскрывается */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 pl-2 pr-6 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};