import React from "react";

const MoviePage = ({ params }: { params: { id: string } }) => {
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
      <h1>Movie title: {movie?.title}</h1>
      <h1>Movie description: {movie?.description}</h1>
      <h1>Ratings: {movie?.rating}</h1>
      <h1>Comments: {movie?.comments}</h1>
    </div>
  );
};

export default MoviePage;
