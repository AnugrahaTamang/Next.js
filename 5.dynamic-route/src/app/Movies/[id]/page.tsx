import React from "react";

const FindOne = ({ params }: { params: { id: number } }) => {
  const data = [
    { id: 1, name: "ramit", age: 22, location: "ktm" },
    { id: 2, name: "vandai", age: 23, location: "pokhara" },
    { id: 3, name: "rame", age: 24, location: "dhading" },
  ];
  const mo = data.find((data) => data.id == params.id);
  return (
    <div>
      <li key={mo?.id}>
        <h1>Name: {mo?.name}</h1>
        <h1>Age: {mo?.age}</h1>
        <h1>Location: {mo?.location}</h1>
      </li>
    </div>
  );
};

export default FindOne;
