import React from "react";
import { redirect } from "next/navigation";
const Project = () => {
  redirect("./About");
  return (
    <div>
      <h1>This is project page</h1>
    </div>
  );
};

export default Project;
