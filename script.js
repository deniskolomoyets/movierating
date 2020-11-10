const nubmerOfFilms = +prompt("Сколько фильмов вы уже посмотрели?",""); //добавили + к promt потому что будем задавать число

const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt ("Один  из последних просмотренных фильмов?",""),
      b = prompt ("На сколько оцените его?",""),
      с = prompt ("Один из последних просмотренных фильмов?",""),
      d = prompt ("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d; //записываем ответы в формате ключ-значение
//когда записываем свойства в обьект лучше использовать квадратные скобки [] (против багов)
console.log(personalMovieDB);