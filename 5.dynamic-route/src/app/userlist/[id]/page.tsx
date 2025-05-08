import React from "react";

const FoundOne = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Id is {params.id}</h1>
    </div>
  );
};

export default FoundOne;
