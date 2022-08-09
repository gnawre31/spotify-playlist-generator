import React from "react";

const Home = () => {
  return (
    <div>
      <div>home</div>
      <div>
        <a
          href={
            process.env.NODE_ENV === "development"
              ? "http://localhost:5001/api/auth/spotify"
              : "/api/auth/spotify"
          }
        >
          Login
          <div></div>
        </a>
      </div>
    </div>
  );
};

export default Home;
