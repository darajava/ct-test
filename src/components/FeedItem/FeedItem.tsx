import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import { TotalCharge, Vehicle, VehVendorAvail } from "../../APITypes";

import { FaSnowflake } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump, BsFillPeopleFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";

import styles from "./FeedItem.module.css";

type Props = {
  vehicle: Vehicle;
  vendorName: string;
  totalCharge: TotalCharge;
  pickUpFrom: string;
  days: number;
  fullscreen?: boolean;
  closeFullscreen?: () => void;
};

function FeedItem(props: Props) {
  const [features, setFeatures] = useState({
    airConditioning: false,
    transmission: "",
    fuelType: "",
    baggageQuantity: 0,
    doorCount: 0,
    driveType: "",
    passengerQuantity: 0,
  });

  const [showingFullScreen, setShowingFullScreen] = useState(false);

  useEffect(() => {
    setFeatures({
      airConditioning: props.vehicle["@AirConditionInd"] === "true",
      transmission: props.vehicle["@TransmissionType"],
      fuelType: props.vehicle["@FuelType"],
      baggageQuantity: parseInt(props.vehicle["@BaggageQuantity"]),
      doorCount: parseInt(props.vehicle["@DoorCount"]),
      driveType: props.vehicle["@DriveType"],
      passengerQuantity: parseInt(props.vehicle["@PassengerQuantity"]),
    });
  }, [props.vehicle]);

  return (
    <>
      {showingFullScreen && (
        <div
          className={styles.fullscreenOverlay}
          onClick={() => {
            setShowingFullScreen(false);
          }}
        >
          <FeedItem
            {...props}
            fullscreen={true}
            closeFullscreen={() => {
              setShowingFullScreen(false);
            }}
          />
        </div>
      )}
      <div
        className={`${styles.feedItem} ${
          props.fullscreen ? styles.fullscreen : ""
        }`}
      >
        {props.fullscreen && (
          <div
            className={styles.closeButton}
            onClick={() => {
              props.closeFullscreen!();
            }}
          >
            &times;
          </div>
        )}
        <div className={styles.vehicleImage}>
          <img src={props.vehicle.PictureURL} alt="vehicle" />
        </div>

        <div className={styles.mainContent}>
          <header className={styles.header}>
            <div className={styles.vehicleName}>
              {props.vehicle.VehMakeModel["@Name"]}
            </div>
            <img
              src={`${props.vendorName}.png`}
              alt="vendor"
              className={styles.vendor}
            />
          </header>

          <div className={styles.description}>
            <ul className={styles.features}>
              {features.airConditioning && (
                <li className={styles.feature}>
                  <FaSnowflake /> Air Conditioned
                </li>
              )}
              <li className={styles.feature}>
                <TbManualGearbox /> {features.transmission}
              </li>
              <li className={styles.feature}>
                <BsFuelPump /> {features.fuelType}
              </li>
              <li className={styles.feature}>
                <MdLuggage /> {features.baggageQuantity} bags
              </li>
              <li className={styles.feature}>
                <GiCarDoor /> {features.doorCount} doors
              </li>
              <li className={styles.feature}>
                <BsFillPeopleFill /> {features.passengerQuantity} passengers
              </li>
            </ul>

            <div className={styles.priceContainer}>
              Price for {props.days} days:
              <div className={styles.price}>
                {props.totalCharge["@CurrencyCode"]}{" "}
                {props.totalCharge["@RateTotalAmount"]}
              </div>
              <div className={styles.pickUpFrom}>
                Pick up from {props.pickUpFrom}
              </div>
              <button
                className={styles.button}
                onClick={() => {
                  if (props.fullscreen) {
                    props.closeFullscreen!();
                  } else {
                    setShowingFullScreen(true);
                  }
                }}
              >
                {props.fullscreen ? "Close" : "View more"}
              </button>
            </div>
          </div>
          {props.fullscreen && (
            <div className={styles.extendedDescription}>
              <h3>More Details</h3>
              Hey so this car is pretty cool. It's got a lot of features and
              just great to drive. Hey so this car is pretty cool. It's got a
              lot of features and just great to drive. Hey so this car is pretty
              cool. It's got a lot of features and just great to drive. Hey so
              this car is pretty cool. It's got a lot of features and just great
              to drive. Hey so this car is pretty cool. It's got a lot of
              features and just great to drive. Hey so this car is pretty cool.
              It's got a lot of features and just great to drive. Hey so this
              car is pretty cool. It's got a lot of features and just great to
              drive. Hey so this car is pretty cool. It's got a lot of features
              and just great to drive.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FeedItem;
