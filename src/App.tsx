import React from "react";
import { CTResponse } from "./APITypes";

import styles from "./App.module.css";
import Feed from "./components/Feed/Feed";
import ShadowFeedItem from "./components/FeedItem/ShadowFeedItem";
import Legend from "./components/Legend/Legend";
import Loading from "./components/Loading/Loading";

export type OrderBy = "price" | "doors" | "bags" | "passengers";

function App() {
  const [availableVendors, setAvailableVendors] = React.useState<CTResponse[]>(
    []
  );

  const [ordering, setOrdering] = React.useState<OrderBy>("price");
  const [ascending, setAscending] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        // Simulate a slow API response
        setTimeout(() => {
          setAvailableVendors(data);
        }, 8000);
      })
      .catch((error) => {
        // TODO: More advanced error handling
        console.error(error);
        alert("Something went wrong when fetching cars");
      });
  }, []);

  let content = (
    <div className={styles.shadowContainer}>
      <ShadowFeedItem />
      <ShadowFeedItem />
      <ShadowFeedItem />
      <ShadowFeedItem />
      <Loading />
    </div>
  );
  if (availableVendors.length > 0) {
    content = (
      <Feed
        availableVendors={availableVendors[0].VehAvailRSCore.VehVendorAvails}
        searchParams={availableVendors[0].VehAvailRSCore.VehRentalCore}
        ordering={ordering}
        ascending={ascending}
      />
    );
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="logo.png" alt="logo" className={styles.logo} />
        <span className={styles.heading}>CarTrawler Tech Test</span>
        <span className={styles.rightHidden}></span>
      </header>
      <main className={styles.main}>
        <div className={styles.topBar}>
          <Legend
            vehRentalCore={availableVendors[0]?.VehAvailRSCore.VehRentalCore}
          />
          <div className={styles.orderByContainer}>
            Sort by:
            <select
              className={styles.orderBy}
              value={ordering}
              onChange={(e) => setOrdering(e.target.value as any)}
            >
              <option value="price">Price</option>
              <option value="doors">Door Count</option>
              <option value="bags">Bags</option>
              <option value="passengers">Passengers</option>
            </select>
            <select
              className={styles.orderBy}
              value={ascending ? "asc" : "desc"}
              onChange={(e) => setAscending(e.target.value === "asc")}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
        {content}
      </main>
    </div>
  );
}

export default App;
