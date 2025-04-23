import React from "react";

const One = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Information about {id}</h1>
      <h1>My name is {id}</h1>
    </div>
  );
};

export default One;
