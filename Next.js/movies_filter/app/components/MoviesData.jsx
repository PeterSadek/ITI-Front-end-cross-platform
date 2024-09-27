"use client";

import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { sort } from "fast-sort";

const MoviesData = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=1549e92d47be72d14413d096b261b8c6"
        );
        let data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  function ascOrder() {
    const sorted = sort(movies).asc((u) => u.title);
    setMovies(sorted);
  }

  function descOrder() {
    const sorted = sort(movies).desc((u) => u.title);
    setMovies(sorted);
  }

  function recentOrder() {
    const sorted = sort(movies).desc((u) => u.release_date);
    setMovies(sorted);
  }

  return (
    <>
      <Filter asc={ascOrder} desc={descOrder} recent={recentOrder} />
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col w-48 bg-stone-300 rounded-lg shadow-lg shadow-stone-500/50 hover:scale-105 transition ease-in-out grow md:grow-0 lg:grow-0 xl:grow-0"
          >
            <div>
              <img
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
        ))}
      </div>
    </>
  );
};

export default MoviesData;
