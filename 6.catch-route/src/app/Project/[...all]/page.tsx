import React from "react";

const CatchAll = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  console.log(all);
  return (
    <div>
      <ul>
        {all.map((d) => (
          <li key={Math.random()}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatchAll;
