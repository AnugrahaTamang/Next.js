import Link from "next/link";
import React from "react";

const Home = () => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
    },
  ];
  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
  ).toFixed(1);
  return (
    <div>
      <h1 className="text-center bg-gray-400 font-bold">Dashboard</h1>
      <div className="flex flex-row justify-around">
        <div>
          <h1>Total Movies</h1>
          <p>{totalMovies}</p>
        </div>
        <div>
          <h1>Total Comments</h1>
          <p>{totalComments}</p>
        </div>
        <div>
          <h1>Total Reviews</h1>
          <p>{averageRating}</p>
        </div>
      </div>
      <br />
      <div>
        <h1>Movie List</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`Movies/${movie.id}`}>{movie.title}</Link>
              <p>Description : {movie.description}</p>
              <p>Comments: {movie.comments}</p>
              <p>Ratings: {movie.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
