import React from "react";

const Blog = () => {
  return (
    <div className="mb-48">
      <h1 className="text-primary my-10 text-3xl text-center ">
        Welcome to Perfect GymEqu Hub!!!
      </h1>
      <h2 className="text-x font-bold">
        1 Difference between javascript and nodejs
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        JavaScript is a simple programming language that runs in any browser
        JavaScript Engine. Whereas Node JS is an interpreter or running
        environment for a JavaScript programming language that holds many
        excesses, it requires libraries that can easily be accessed from
        JavaScript programming for better use.
      </p>
      <br />

      <h2 className="text-x font-bold">
        2. What is difference between MySQL and NoSQL?
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        Image result for Differences between sql and nosql databases. MySQL is a
        relational database that is based on tabular design whereas NoSQL is
        non-relational in nature with its document-based design. MySQL has
        established a database, covering huge IT market whereas NoSQL databases
        are the latest arrival, hence still gaining popularity among big IT
        giants.
      </p>
      <br />

      <h2 className="text-x font-bold">
        3. What is the purpose of jwt and how does it work
      </h2>
      <p>
        {" "}
        <b>Answer: </b>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. The
        authentication server verifies the credentials and issues a JWT signed
        using a private key. Moving forward, the client will use the JWT to
        access protected resources by passing the JWT in the HTTP Authorization
        header. The resource server then verifies the authenticity of the token
        using the public key.
      </p>
      <br />
    </div>
  );
};

export default Blog;
