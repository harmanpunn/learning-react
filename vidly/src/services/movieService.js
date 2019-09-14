import http from "./httpService";
import { apiEndpoint } from "../config.json";

const apiUrl = apiEndpoint + "movies";

export function getMovies() {
  return http.get(apiUrl);
}

export function deleteMovie(movieId) {
  return http.delete(apiUrl + "/" + movieId);
}

export function getMovie(movieId) {
  return http.get(apiUrl + "/" + movieId);
}

export function saveMovie(movie) {
  console.log(movie);
  const { title, numberInStock, dailyRentalRate, genreId } = movie;
  const movieData = {
    title: title,
    numberInStock: numberInStock,
    dailyRentalRate: dailyRentalRate,
    genreId: genreId
  };
  return http.put(apiUrl + "/" + movie._id, movieData);
}
