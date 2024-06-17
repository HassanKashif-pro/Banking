import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Hassan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="username"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access account manage it and perform transactions"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
