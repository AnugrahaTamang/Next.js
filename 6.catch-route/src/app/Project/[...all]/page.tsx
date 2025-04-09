import React from "react";

const AllOne = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  return (
    <div>
      <h1>{all}</h1>
      {all.map((data) => (
        <li key={Math.random()}>{data}</li>
      ))}
    </div>
  );
};

export default AllOne;
