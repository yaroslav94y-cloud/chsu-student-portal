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
    name: "Ректорат (на Луначарского 5)",
    address: "пр. Луначарского, 5",
    description: "Сердце университета. Одно из главных зданий кампуса. Здесь находятся руководящие органы университета и службы, с которыми студент сталкивается чаще всего: учебный отдел, отдел по работе со студентами, приёмная ректора.",
    institutes: ["Ректорат"],
    image: "https://placehold.co/600x400/1e40af/ffffff?text=Lunacharskogo+5", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CLc6VB7e",
    workingHours: "08:30 - 17:30",
    busRoutes: ["2", "8", "4", "7", "18", "37"],
    hasDining: true,
    instituteLink: "https://chsu.ru/institutes/gumanitarniy",
  },
  {
    id: 2,
    name: "Главный корпус (на Советском 8)",
    address: "пр. Советский, 8",
    description: "Корпус с богатой историей, объединяющий студентов самых разных направлений — от IT и естественных наук до педагогики и филологии. В нём расположен Единый деканат, куда обращаются за справками и организационной помощью.",
    institutes: ["ИИТ", "ИПиП", "ГУ", "ИБиС"],
    image: "https://placehold.co/600x400/b91c1c/ffffff?text=Sovetsky+8", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CLc6ZHyF",
    workingHours: "08:30 - 21:00",
    busRoutes: ["4"],
    hasDining: true,
    instituteLink: "https://www.chsu.ru/struktura-chgu/instituty-i-fakultety/institut-informatsionnykh-tekhnologiy/",
  },
  {
    id: 3,
    name: "Бизнес-школа (на Советском 10)",
    address: "пр. Советский, 10",
    description: "Бизнес-школа и Институт психологии и педагогики объединяют гуманитарные направления подготовки, исследовательские центры и практико-ориентированные образовательные программы.",
    institutes: ["БШ", "ИПиП", "ИБиС"],
    image: "https://placehold.co/600x400/b91c1c/ffffff?text=Sovetsky+10", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CLc6ZO5bB",
    workingHours: "08:30 - 21:00",
    busRoutes: ["4"],
    hasDining: false,
    instituteLink: "https://www.chsu.ru/struktura-chgu/instituty-i-fakultety/biznes-shkola/",
  },
  {
    id: 4,
    name: "Передовая инженерная школа (на Победы 12)",
    address: "пр. Победы, 12",
    description: "Здание Передовой инженерной школы — центр высокотехнологичного образования и инженерных проектов. Это первая ПИШ в Вологодской области, где студенты работают с современными технологиями и промышленными партнёрами.",
    institutes: ["ПИШ", "Пед. колледж", "ИТИ"],
    image: "https://placehold.co/600x400/15803d/ffffff?text=Pobedy+12", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CLc66Q1k",
    workingHours: "08:30 - 21:00",
    busRoutes: ["37э", "38э", "39"],
    hasDining: false,
    instituteLink: "https://www.chsu.ru/struktura-chgu/instituty-i-fakultety/peredovaya-inzhenernaya-shkola/",
  },
  {
    id: 5,
    name: "Инженерно-технический институт (на Дзержинского 30)",
    address: "ул. Дзержинского, 30",
    description: "Здесь готовят инженеров, создающих и поддерживающих инфраструктуру, энергетику и промышленность региона. Институт объединяет направления строительства, тепло- и электроэнергетики, металлургии и техносферной безопасности.",
    institutes: ["ИТИ"],
    image: "https://placehold.co/600x400/15803d/ffffff?text=Dzerjinskogo+30", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CLc66Goy",
    workingHours: "08:30 - 21:00",
    busRoutes: ["1", "2", "4", "8", "31", "37"],
    hasDining: false,
    instituteLink: "https://www.chsu.ru/struktura-chgu/instituty-i-fakultety/inzhenerno-tekhnicheskiy-institut/",
  },
  {
    id: 6,
    name: "Точка кипения и ДНК (на Горького 14)",
    address: "ул. Максима Горького, 14",
    description: "ДНК — площадка для раннего погружения в науку и технологии. В лабораториях дети и молодежь выполняют реальные исследовательские проекты, изучают искусственный интеллект, биотехнологии, VR, робототехнику и инженерный дизайн вместе с учёными и студентами.",
    institutes: ["ДНК", "ТК"],
    image: "https://placehold.co/600x400/15803d/ffffff?text=Maksima+Gorkogo+14", // Временная заглушка
    geoLink: "https://yandex.ru/maps/-/CLc66H6B",
    workingHours: "08:30 - 17:30",
    busRoutes: ["7", "18", "37"],
    hasDining: false,
    instituteLink: "https://www.chsu.ru/struktura-chgu/administrativnye-podrazdeleniya/dom-nauchnoy-kollaboratsii.php",
  }
];