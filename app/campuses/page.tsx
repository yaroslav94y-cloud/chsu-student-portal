// app/campuses/page.tsx

// Добавьте эти два импорта вверху:
import Link from 'next/link';
import { Home } from 'lucide-react'; 

import { campuses } from '@/data/campuses';
import { CampusCard } from '@/components/CampusCard';

export default function CampusesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* 🚀 НОВЫЙ БЛОК: Кнопка "На главную" */}
        <div className="mb-10 pt-4 sm:pt-0">
          <Link 
            href="/" // Ссылка на корень сайта
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-semibold text-lg"
          >
            <Home size={20} className="mr-2" />
            На главную
          </Link>
        </div>
        {/* ---------------------------------- */}
        
        {/* Заголовок (Немного смещаем вниз, чтобы не наезжать на кнопку) */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Учебные корпуса ЧГУ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Навигатор для первокурсника: адреса, транспорт и институты.
          </p>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campuses.map((campus) => (
            <CampusCard key={campus.id} campus={campus} />
          ))}
        </div>

      </div>
    </div>
  );
}