import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

import styles from "./Loading.module.css";

function Loading() {
  const messages = [
    "Looking for cars...",
    "It doesn't actually take this long.",
    "This delay is simulated to show off the loading screen :)",
  ];

  const [displayMessage, setDisplayMessage] = useState(0);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (displayMessage > messages.length) {
      return;
    }
    setTimeout(() => {
      if (displayMessage < messages.length - 1) {
        setDisplayMessage(displayMessage + 1);
      } else {
        setError(true);
      }
    }, 3000);
  }, [displayMessage, messages.length]);

  let content = (
    <>
      <GridLoader color="#36d7b7" />
      <span className={styles.message}>{messages[displayMessage]}</span>
    </>
  );
  if (error) {
    content = (
      <span className={`${styles.message} ${styles.error}`}>
        Sorry, we couldn't find any cars for you, please try again later.
      </span>
    );
  }

  return <div className={styles.loading}>{content}</div>;
}

export default Loading;
