const employees = [
  { name: "Алексей", position: "Разработчик", startYear: 2018 },
  { name: "Мария", position: "Дизайнер", startYear: 2019 },
  { name: "Иван", position: "Аналитик", startYear: 2020 },
  { name: "Никита", position: "Аналитик", startYear: 2024 },
];

// 1. Добавьте нового сотрудника: «Елена», «Менеджер проектов», 2021.
employees.push({
  name: "Елена",
  position: "Менеджер проектов",
  startYear: 2021,
});

console.log(1, employees);

// 2. Найдите сотрудника по имени «Мария».
const employerMary = employees.find((empl) => empl.name === "Мария");

console.log(2, employerMary);


// 3. Обновите должность сотрудника «Иван» на «Старший аналитик».

const employerIvan = employees.find((empl) => empl.name === "Иван");
employerIvan.position = "Старший аналитик";

console.log(3, employees);


// 4. Удалите сотрудника «Алексей» из базы данных.
const employerAlexIdx = employees.findIndex((empl) => empl.name === "Алексей");

if (employerAlexIdx !== -1) {
  employees.splice(employerAlexIdx, 1);
}

console.log(4, employees);


// 5. Выведите список сотрудников, работающих в компании более 2 лет.

const hasMoreThan2Years = (startYear = 0) => {
  const currentYear = new Date().getFullYear()

  return (currentYear - startYear) > 2;

}

const yearTwoEmployers = employees.filter(({ startYear = 0 }) =>
  hasMoreThan2Years(startYear)
);

console.log(5, yearTwoEmployers);
