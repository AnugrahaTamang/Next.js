import Link from "next/link";
import React from "react";

const MoviePage = () => {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
  ];
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`Movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;
