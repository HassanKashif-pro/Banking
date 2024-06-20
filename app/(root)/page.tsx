import HeaderBox from "@/components/HeaderBox";
import RightSideber from "@/components/RightSideber";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JSM",
    email: "Homegaerms.2020@Gmail.com",
  };

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
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={12434.43}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideber user={loggedIn} banks={[]} transactions={[]} />
    </section>
  );
};

export default Home;
