import http from "./httpService";
import { apiEndpoint } from "../config.json";

const apiUrl = apiEndpoint + "movies";

export function getMovies() {
  return http.get(apiUrl);
}

export function deleteMovie(movieId) {
  return http.delete(apiUrl + "/" + movieId);
}
