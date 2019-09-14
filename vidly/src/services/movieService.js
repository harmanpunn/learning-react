import http from "./httpService";

const apiUrl = "/movies";

function movieUrl(id) {
  return `${apiUrl}/${id}`;
}

export function getMovies() {
  return http.get(apiUrl);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const movieData = { ...movie };
    delete movieData._id;
    return http.put(movieUrl(movie._id), movieData);
  }

  return http.post(apiUrl, movie);
}
