const weatherData = [
  { date: "2024-04-01", maxTemp: 20, minTemp: 10, description: "солнечно" },
  { date: "2024-04-02", maxTemp: 15, minTemp: 7, description: "облачно" },
  { date: "2024-04-03", maxTemp: 17, minTemp: 9, description: "дождь" },
  { date: "2024-04-04", maxTemp: 22, minTemp: 12, description: "солнечно" },
  { date: "2024-04-05", maxTemp: 18, minTemp: 8, description: "облачно" },
];

// 1. Найдите среднюю максимальную и минимальную температуру за все дни.

const reportAvgTempsForDays = weatherData.reduce(
  (acc, day, idx, arr) => {
    acc.maxTempTotal += day.maxTemp;
    acc.minTempTotal += day.minTemp;

    if (idx === arr.length - 1) {
      acc.avgMaxTemp = acc.maxTempTotal / arr.length;
      acc.avgMinTemp = acc.minTempTotal / arr.length;
    }

    return acc;
  },
  {
    maxTempTotal: 0,
    minTempTotal: 0,
    avgMaxTemp: 0, // средняя максимальная
    avgMinTemp: 0, // средняя минимальная
  }
);

console.log(1, reportAvgTempsForDays);

// 2. Определите день с самой высокой максимальной температурой и день с самой низкой минимальной температурой.

const reportDayTempMinMax = weatherData.reduce(
  (acc, day, _, arr) => {
    if (day.maxTemp > acc.hottestDay.maxTemp) {
      acc.hottestDay = day;
    }

    if (day.minTemp < acc.coldestDay.minTemp) {
      acc.coldestDay = day;
    }

    return acc;
  },
  {
    hottestDay: weatherData[0],
    coldestDay: weatherData[0],
  }
);

console.log(2, reportDayTempMinMax);

// 3. Классифицируйте дни по типу погоды (например, количество солнечных, облачных и дождливых дней).

const weatherTypeStats = weatherData.reduce((acc, day) => {
  const weatherType = day.description;

  acc[weatherType] = (acc[weatherType] || 0) + 1;

  return acc;
}, {});

console.log(3, weatherTypeStats);

// 4. Создайте строку, содержащую информацию о погоде за все дни в формате: «Дата: 2024-04-01, Макс.: 20°C, Мин.: 10°C, Погода: солнечно».

const reportWeatherToString = weatherData
  .map(
    ({ date = "", maxTemp = 0, minTemp = 0, description = "" }) =>
      `Дата: ${date}, Макс: ${maxTemp}°C, Мин: ${minTemp}°C, Погода: ${description}`
  ).join("\n");

console.log(reportWeatherToString);
