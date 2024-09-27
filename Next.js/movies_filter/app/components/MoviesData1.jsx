import React from "react";

const MoviesData = async () => {
  let res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=1549e92d47be72d14413d096b261b8c6"
  );
  let movies = await res.json();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {movies.results.map((movie) => {
        return (
          <div
            key={movie.id}
            className="flex flex-col w-48 bg-stone-300 rounded-lg shadow-lg shadow-stone-500/50 hover:scale-105 transition ease-in-out"
          >
            <div>
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="my-3 ml-2">
              <p className="font-medium text-slate-700">{movie.title}</p>
              <p className="font-light text-slate-500 text-sm">
                {movie.release_date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesData;
