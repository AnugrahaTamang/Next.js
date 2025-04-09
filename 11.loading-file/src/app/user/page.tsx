import React from "react";

const User = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Content loading....");
    }, 4000);
  });
  return <div>I am the main user. I love Nepal.</div>;
};

export default User;
