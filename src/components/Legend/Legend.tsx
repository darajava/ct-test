import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import { VehRentalCore } from "../../APITypes";

import styles from "./Legend.module.css";

type Props = {
  vehRentalCore: VehRentalCore;
};

function Legend(props: Props) {
  if (!props.vehRentalCore) return <div />;
  return (
    <div className={styles.legend}>
      <div className={styles.pickUp}>
        <div>
          Pick up: <b>{props.vehRentalCore.PickUpLocation["@Name"]}</b>
        </div>
        <div>
          Drop off: <b>{props.vehRentalCore.ReturnLocation["@Name"]}</b>
        </div>
      </div>
      <div className={styles.time}>
        {format(
          new Date(props.vehRentalCore["@PickUpDateTime"]),
          "MMMM dd, yyyy"
        )}{" "}
        -{" "}
        {format(
          new Date(props.vehRentalCore["@ReturnDateTime"]),
          "MMMM dd, yyyy"
        )}
      </div>
    </div>
  );
}

export default Legend;
