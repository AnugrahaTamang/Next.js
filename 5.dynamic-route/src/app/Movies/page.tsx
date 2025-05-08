import Link from "next/link";
import React from "react";
const data = [
  { id: 1, name: "ramit", age: 22, location: "ktm" },
  { id: 2, name: "vandai", age: 23, location: "pokhara" },
  { id: 3, name: "rame", age: 24, location: "dhading" },
];
const Movies = () => {
  return (
    <div>
      <h1 className="bg-black text-white text-3xl text-center h-12 justify-center">
        Movies
      </h1>
      <ul className="flex justify-around bg-amber-500 text-4xl">
        {data.map((d) => {
          return (
            <Link
              href={`/movies/${d.id}`}
              className="bg-black text-white rounded-3xl hover:bg-yellow-400 text-black"
            >
              {d.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
