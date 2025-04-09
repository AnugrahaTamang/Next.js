import React from "react";
const Dashboard = () => {
  if (2 < 5) {
    throw new Error("Error");
  }
  return (
    <div>
      <h1>This is dashboard error</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt fugit
        aperiam praesentium asperiores sed repellendus vitae voluptates facilis
        molestias debitis. Quidem adipisci architecto iusto ipsum aliquam alias
        vel beatae, excepturi ullam ducimus! Cupiditate praesentium consequatur
        quidem, earum animi sed minus sit reprehenderit numquam quia ex!
        Officiis sed aperiam omnis maiores voluptatem quaerat in reiciendis
        unde. Dolores minima impedit rem tenetur aut temporibus eligendi
        asperiores veritatis qui facere, ut doloribus eius porro, dolore
        perspiciatis et fugiat! At veniam earum, doloremque distinctio laborum
        fugiat deserunt eius dicta. Quam sunt aut, provident iusto veniam quia
        velit molestias. Commodi saepe cupiditate voluptate error odio!
      </p>
    </div>
  );
};

export default Dashboard;
