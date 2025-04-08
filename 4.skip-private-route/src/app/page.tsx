import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is a Home page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem at
        voluptatum tempore, ratione ipsa tenetur magni laborum nulla esse,
        facilis, officiis iste illo eaque necessitatibus atque velit deleniti
        placeat alias harum temporibus consectetur accusantium? Nostrum commodi
        vel debitis, porro magni laboriosam placeat tenetur officia similique
        doloremque hic neque rerum beatae harum praesentium quos nulla nesciunt
        quod voluptatibus earum adipisci sunt. Ipsam sunt itaque sit id,
        possimus quaerat. Velit consectetur enim ipsa incidunt error vero dicta
        iure perspiciatis alias nam repellendus, praesentium est doloribus, quae
        culpa non quia qui voluptates dolorum hic, tempore quos. Harum vel
        suscipit, blanditiis nisi natus ipsam?
      </p>
      <Link href="/Login">Login </Link>
      <br />
      <Link href="/Register">Register</Link>
      <br />
      <Link href="/PrivateOne">PrivateOne</Link>
    </div>
  );
};

export default Home;
