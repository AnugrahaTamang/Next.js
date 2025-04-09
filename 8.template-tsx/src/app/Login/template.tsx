"use client";
import Link from "next/link";
import React, { useState } from "react";

const TemplateOne = () => {
  const [name, setname] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter your name"
      />
      <br />
      <Link href={`Login/Loginuser`}>Login User</Link>
      <br />
      <Link href={`Login/Loginadmin`}>Login Admin</Link>
    </div>
  );
};

export default TemplateOne;
