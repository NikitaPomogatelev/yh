const players = [
  { id: 1, name: "Лионель Месси", teamId: 1, countryId: 1, goals: 30 },
  { id: 2, name: "Криштиану Роналду", teamId: 2, countryId: 2, goals: 25 },
  { id: 3, name: "Неймар", teamId: 3, countryId: 3, goals: 20 },
  { id: 4, name: "Килиан Мбаппе", teamId: 3, countryId: 4, goals: 22 },
  { id: 5, name: "Златан Ибрагимович", teamId: 4, countryId: 5, goals: 15 },
];
const teams = [
  { id: 1, name: "ПСЖ", countryId: 3 },
  { id: 2, name: "Манчестер Юнайтед", countryId: 2 },
  { id: 3, name: "Барселона", countryId: 1 },
  { id: 4, name: "Милан", countryId: 5 },
];
const countries = [
  { id: 1, name: "Аргентина" },
  { id: 2, name: "Португалия" },
  { id: 3, name: "Франция" },
  { id: 4, name: "Бразилия" },
  { id: 5, name: "Швеция" },
];

// 1.Создайте массив с именами всех игроков.
const playerNames = players.map((p) => p.name);

console.log(1, playerNames);

// 2. Создайте список игроков, играющих в команде с названием «ПСЖ».
const psgTeam = teams.find((t) => t.name === "ПСЖ");

const playerPsgList = psgTeam
  ? players.filter((p) => p.teamId === psgTeam.id)
  : [];

console.log(2, playerPsgList);

// 3. Проверьте, есть ли игрок из страны «Аргентина».
const argentinaCountry = countries.find((c) => c.name === "Аргентина");

const hasArgentinaPlayer =
  !!argentinaCountry &&
  players.some((p) => p.countryId === argentinaCountry.id);

console.log(3, hasArgentinaPlayer);

// 4. Вычислите общее количество голов, забитых всеми игроками.
const goalsTotal = players.reduce((acc, p) => acc + p.goals, 0);
console.log(4, goalsTotal);

// 5. Создайте строку, содержащую информацию о каждом игроке в виде «Имя игрока (Команда)».
const playersNameAndTeamFormatted = players.map((p) => {
  const teamName =
    teams.find((t) => t.id === p.teamId)?.name ?? "Неизвестная команда";

  return `${p.name} (${teamName})`;
});
console.log(5, playersNameAndTeamFormatted);

// 6. Найдите лучшего игрока каждой страны (игрок с наибольшим количеством голов).

const bestPlayerForGoals = [...players].sort((a, b) => b.goals - a.goals)[0];

console.log(6, bestPlayerForGoals);

// 7. Создайте отчет о командах и игроках, включая название команды, страну, список игроков и общее количество голов.

const countryById = Object.fromEntries(countries.map((c) => [c.id, c.name]));

const reportTeam = teams.map((team) => {
  const teamPlayers = players.filter((player) => player.teamId === team.id);
  const goals = teamPlayers.reduce((acc, p) => acc + p.goals, 0);

  return {
    team: team.name,
    country: countryById[team.countryId],
    players: teamPlayers.map((p) => p.name),
    goals,
  };
});

console.log(7, reportTeam);
