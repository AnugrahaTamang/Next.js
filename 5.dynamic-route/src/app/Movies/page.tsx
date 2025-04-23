import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
  ];
  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((d) => (
          <li key={d.id}>
            <Link
              href={`movies/${d.id}`}
              className="text-blue-400 hover:text-blue-600"
            >
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
