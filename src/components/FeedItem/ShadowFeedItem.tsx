import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import { Vehicle, VehVendorAvail } from "../../APITypes";
import { FaSnowflake } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";

import styles from "./FeedItem.module.css";

function ShadowFeedItem() {
  return (
    <div className={`${styles.feedItem} ${styles.shadow}`}>
      <div className={styles.vehicleImage}>
        <img src={"./car-placeholder.png"} alt="vehicle" />
      </div>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.vehicleName}>
            LOREM IPSUM LOREM IPSUM LOREM
          </div>
        </header>

        <div className={styles.description}>
          <ul className={styles.features}>
            <li className={styles.feature}>LOREM IPSUM LOREM IPSUM</li>

            <li className={styles.feature}>LOREM IPSUM</li>
            <li className={styles.feature}>LOREM IPSUM LO</li>
            <li className={styles.feature}>LOREM LOREM IPSUM</li>
            <li className={styles.feature}>LOREM IPSUM DOL</li>
          </ul>

          <div className={styles.priceContainer}></div>
        </div>
      </div>
    </div>
  );
}

export default ShadowFeedItem;
