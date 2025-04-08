"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; //when you used the hook. you have to mention "use client".
import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <h1>This is about the navbar</h1>
      <Link href="/About">About</Link>
      <br />
      <Link href="/Project">Project</Link>
      <br />
      <button onClick={() => router.push("/Resume")}>Resume</button>
      <br />
      <button onClick={() => router.push("/Contact")}>Contact</button>
    </div>
  );
};

export default Navbar;
