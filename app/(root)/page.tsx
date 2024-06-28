import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="username"
            user={loggedIn?.name || "Guest"}
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
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 124.34 }, { currentBalance: 1764.34 }]}
      />
    </section>
  );
};

export default Home;
