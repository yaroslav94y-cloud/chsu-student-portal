// data/campuses.ts

export interface Campus {
  id: number;
  name: string;
  address: string;
  description: string;
  institutes: string[];
  image: string;
  geoLink: string;
  workingHours: string;
  busRoutes: string[];
  hasDining: boolean; // Есть ли столовая
  instituteLink: string; //Ссылка на сайт института
}

export const campuses: Campus[] = [
  {
    id: 1,
    name: "Главный корпус (на Луначарского)",
    address: "пр. Луначарского, 5",
    description: "Сердце университета. Здесь находится ректорат, приемная комиссия, Гуманитарный институт и Институт педагогики и психологии.",
    institutes: ["ГИ", "ИПиП", "Ректорат"],
    image: "https://placehold.co/600x400/1e40af/ffffff?text=Lunacharskogo+5", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CCUjI-QD~A",
    workingHours: "08:00 - 20:00",
    busRoutes: ["4", "7", "31", "39"],
    hasDining: true,
    instituteLink: "https://chsu.ru/institutes/gumanitarniy",
  },
  {
    id: 2,
    name: "Инженерно-технический (на Советском)",
    address: "пр. Советский, 8",
    description: "Историческое здание. Здесь куются инженерные кадры. Рядом набережная для прогулок после пар.",
    institutes: ["ИТИ", "ФБЖ"],
    image: "https://placehold.co/600x400/b91c1c/ffffff?text=Sovetsky+8", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CCUjI-QkzB",
    workingHours: "08:00 - 21:00",
    busRoutes: ["1", "2", "8", "31", "37"],
    hasDining: true,
    instituteLink: "https://chsu.ru/institutes/iti",
  },
  {
    id: 3,
    name: "Корпус на Победы (ИИТ)",
    address: "пр. Победы, 12",
    description: "Здесь живут программисты и математики. Институт информационных технологий.",
    institutes: ["ИИТ"],
    image: "https://placehold.co/600x400/15803d/ffffff?text=Pobedy+12", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CCUjI-Q~xB",
    workingHours: "08:00 - 20:00",
    busRoutes: ["13", "18", "7", "31"],
    hasDining: false,
    instituteLink: "https://chsu.ru/institutes/iit",
  }
];