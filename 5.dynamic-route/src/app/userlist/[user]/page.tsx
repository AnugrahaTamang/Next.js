import React from "react";

const User = async ({ params }: { params: { user: string } }) => {
  const { user } = await params;
  return (
    <div>
      <h1>My name is {user}</h1>
      <h1>My personal name is {user}</h1>
    </div>
  );
};

export default User;
