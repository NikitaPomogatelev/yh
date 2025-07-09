// 1. Управление данными о фильмах

const movies = [
  {
    title: "Звёздные войны",
    year: 1977,
    genre: "Фантастика",
    rating: 8.6,
    duration: 120,
  },
  {
    title: "Назад в будущее",
    year: 1985,
    genre: "Фантастика",
    rating: 8.5,
    duration: 140,
  },
  {
    title: "Терминатор",
    year: 1984,
    genre: "Боевик",
    rating: 8.0,
    duration: 110,
  },
  {
    title: "Интерстеллар",
    year: 2014,
    genre: "Фантастика",
    rating: 8.6,
    duration: 80,
  },
  {
    title: "Властелин колец",
    year: 2001,
    genre: "Фэнтези",
    rating: 8.8,
    duration: 75,
  },
];

// 1. Отобразить названия всех фильмов. Создайте массив.
const nameMoviesList = movies.map((m) => m.title);

console.log(nameMoviesList);

// 2. Создайте список фильмов жанра «Фантастика».
const fantasticMovieList = movies.filter((m) => m.genre === "Фантастика");

console.log(fantasticMovieList);

// 3. Проверьте, есть ли фильм, выпущенный в 1984 году.
const hasMovieIn1984 = movies.some((m) => m.year === 1984);

console.log(hasMovieIn1984);

// 4. Получите общую длительность всех фильмов.
const durationMoviesTotal = movies.reduce(
  (acc, m) => acc + (m.duration ?? 0),
  0
);

console.log(durationMoviesTotal);

// 5. Создайте строку, содержащую информацию о каждом фильме в виде «Название (год)».
const moviesNameAndYear = movies
  .map(({ title, year }) => `${title} (${year})`)
  .join(", ");

console.log(moviesNameAndYear);

// 6. Добавьте новый фильм в массив фильмов: «Матрица», 1999, «Фантастика», 8.7, 110.
const newFilm = {
  title: "Матрица",
  year: 1999,
  genre: "Фантастика",
  rating: 8.7,
  duration: 110,
};
movies.push(newFilm);

console.log(movies);

// 7. Удалите фильм с названием «Терминатор» из массива.
// const withoutTerminatorMovieList = movies.filter((m) => m.title === "Терминатор");
// console.log(7, withoutTerminatorMovieList);

function removeMovieByTitle(title) {
  const idx = movies.findIndex(
    (m) => m.title.toLowerCase() === title.toLowerCase()
  );

  if (idx !== -1) {
    movies.splice(idx, 1);
  }
}

removeMovieByTitle("Терминатор");
console.log(7, movies);

// 8. Обновите рейтинг фильма «Интерстеллар» на 8.7.

const interstellarMovie = movies.find((m) => m.title === "Интерстеллар");

if (interstellarMovie) {
  interstellarMovie.rating = 8.7;
}

console.log(8, movies);

// const interstellarIdx = movies.findIndex((m) => m.title === "Интерстеллар");
// if (interstellarIdx !== -1) {
//   movies[interstellarIdx].rating = 8.7;
// }
// console.log(8, movies);

// 9. Отсортируйте фильмы по году выпуска в порядке возрастания.
movies.sort((a, b) => a.year - b.year);

// const sortedMovies = [...movies].sort((a, b) => a.year - b.year);
console.log("9", movies);

// 10. Получите массив уникальных жанров фильмов.

const uniqueGenre = [...new Set(movies.map((m) => m.genre))];
// const uniqueGenre = Array.from(new Set(movies.map((m) => m.genre)));

console.log(10, uniqueGenre);

// 11. Удалите фильм «Терминатор» из массива (используя splice)
//  ===> п.7
removeMovieByTitle("Терминатор");
console.log(11, movies);

// 12. Замените фильмы с индексами 1 и 2 на следующие фильмы: «Чужой», 1979, «Ужасы», 8.5 и «Бегущий по лезвию», 1982, «Фантастика», 8.1.

const replacementMovies = [
  { title: "Чужой", year: 1979, genre: "Ужасы", rating: 8.5 },
  { title: "Бегущий по лезвию", year: 1982, genre: "Фантастика", rating: 8.1 },
];

movies.splice(1, 2, ...replacementMovies);

console.log(12, movies);
