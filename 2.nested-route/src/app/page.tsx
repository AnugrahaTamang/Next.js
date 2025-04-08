import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100
       flex flex-col items-center justify-center p-6"
    >
      <h1 className="font-bold text-5xl">Welcome To the Dashboard App</h1>
      <p className="text-2xl">
        Manage your tasks, track analytics and stay organized with our powerful
        dashboard
      </p>
      <Link
        className="inline-flex items-center justify-center bg-blue-600
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700
            transition-colors shadow-lg hover:shadow-xl"
        href="/Dashboard"
      >
        Go To Dashboard
      </Link>
    </div>
  );
};

export default Home;
