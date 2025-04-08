import React from "react";

const MovieIdOne = ({ params }: { id: string }) => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
      commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
      commentsList: [
        "Amazing visual effects!",
        "Loved the soundtrack.",
        "A bit confusing but great.",
      ],
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
      commentsList: [
        "The best Batman movie!",
        "Heath Ledger was outstanding.",
        "Iconic movie.",
      ],
    },
  ];

  const movie = movies.find((movie) => movie.id === params.id);
  return (
    <div>
      <h1>Movie Title: {movie?.title}</h1>
      <p>Movie description: {movie?.description}</p>
      <p>Movie ratings: {movie?.rating}</p>
      <p>Movie Comments: {movie?.comments}</p>
      <ul>
        {movie?.commentsList.map((cm) => (
          <li key={Math.random()}>{cm}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieIdOne;
