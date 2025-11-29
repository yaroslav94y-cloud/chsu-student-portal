// app/faq/page.tsx
import React from 'react';
import { generalFAQ } from '@/data/faq';
import { FAQItemComponent } from '@/components/FAQItem';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Кнопка "На главную" */}
        <div className="mb-10 pt-4 sm:pt-0">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold text-lg"
          >
            <Home size={20} className="mr-2" />
            На главную
          </Link>
        </div>

        {/* Заголовок */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Часто задаваемые вопросы (FAQ)
          </h1>
          <p className="text-lg text-gray-600">
            Здесь собраны ответы на самые горячие вопросы от будущих студентов ЧГУ.
          </p>
        </div>

        {/* Список Аккордеонов */}
        <div className="border-t border-gray-200">
          {generalFAQ.map(item => (
            <FAQItemComponent key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}