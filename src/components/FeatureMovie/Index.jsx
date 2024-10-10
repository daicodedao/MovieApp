import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjBkOGFjZWVmMDM4MjE0MmRkOTE2ZWY5ZDc0Zjc2ZCIsIm5iZiI6MTcyODM0NjM2OC43NTA5OTMsInN1YiI6IjY2ZGQ1ODJjMjRjNDNjNzM4MTlhOWM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s06Yt2M4P6eSTZat2v4XAjvVKQlBGdstktkbRcDKxzA",
      },
    })
      .then(async (response) => {
        const data = await response.json();
        const popularMovies = data.results.slice(0, 4);
        setMovies(popularMovies);
        setActiveMovieId(popularMovies[0].id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (movies.length === 0) {
    return <div>Loanding....</div>;
  }
  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      <PaginateIndicator movies={movies} activeMovieId={activeMovieId} setActiveMovieId = {setActiveMovieId} />
    </div>
  );
};

export default FeatureMovies;
