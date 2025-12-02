import Link from 'next/link';
import { Map, GraduationCap, BookOpen, Search } from 'lucide-react'; // Импортируем иконки

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      
      {/* Приветствие */}
      <div className="text-center mb-12 max-w-2xl">
        <div className="flex justify-center mb-4">
          <span className="bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full">
            Beta v1.0
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Твой старт в <span className="text-blue-600">ЧГУ</span>
        </h1>
        <p className="text-lg text-gray-600">
          Всё, что нужно знать первокурснику: от расписания автобусов до меню в столовой. Без бюрократии.
        </p>
      </div>

      {/* Сетка меню (Dashboard) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        
        {/* КАРТОЧКА: КОРПУСА (Активная) */}
        <Link 
          href="/campuses"
          className="group relative overflow-hidden rounded-3xl bg-blue-600 p-8 text-white shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl"
        >
          <div className="relative z-10">
            <Map size={48} className="mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Навигатор по корпусам</h2>
            <p className="text-blue-100 opacity-90">
              Где находится деканат, как доехать и фото входов.
            </p>
          </div>
          {/* Декоративный круг на фоне */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white opacity-10 group-hover:scale-150 transition-transform duration-500" />
        </Link>

        {/* КАРТОЧКА: FAQ (Активная) */}
        <Link 
          href="https://www.chsu.ru/raspisanie/?p_p_id=TimeTable_WAR_TimeTableportlet&p_p_lifecycle=0&p_p_state=maximized&p_p_state_rcv=1&p_p_col_id=column-1&p_p_col_count=1&ysclid=milwxq91pu774872204"
          className="group relative overflow-hidden rounded-3xl bg-red-600 p-8 text-white shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl"
        >
          <div className="relative z-10">
            <Search size={48} className="mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Расписание занятий</h2>
            <p className="text-red-100 opacity-90">
             Узнать расписание своей группы, преподавателя или понять, какая аудитория свободна.
           </p>
          </div>
          {/* Декоративный круг на фоне */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white opacity-10 group-hover:scale-150 transition-transform duration-500" />
        </Link>         
        
        {/* КАРТОЧКА: FAQ (Активная) */}
        <Link 
          href="/faq"
          className="group relative overflow-hidden rounded-3xl bg-green-600 p-8 text-white shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl"
        >
          <div className="relative z-10">
            <Search size={48} className="mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Ответы на вопросы (FAQ)</h2>
            <p className="text-green-100 opacity-90">
             Списки групп, расписание, студенческий билет и деканат.
           </p>
          </div>
          {/* Декоративный круг на фоне */}
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white opacity-10 group-hover:scale-150 transition-transform duration-500" />
        </Link>        

        {/* КАРТОЧКА: ГАЙД (Пока неактивная заглушка) */}
        <div className="group relative overflow-hidden rounded-3xl bg-gray-100 p-8 text-gray-400 border-2 border-dashed border-gray-300 cursor-not-allowed">
          <div className="relative z-10">
            <BookOpen size={48} className="mb-4 opacity-50" />
            <h2 className="text-2xl font-bold mb-2">Гайд выживания</h2>
            <p className="text-sm">Скоро: как получить справку и где взять зачетку.</p>
          </div>
        </div>

      </div>

      {/* Подвал */}
      <div className="mt-16 text-gray-400 text-sm">
        Сделано студентами для студентов
      </div>
    </main>
  );
}