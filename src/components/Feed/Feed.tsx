import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import { VehRentalCore, VehVendorAvail } from "../../APITypes";
import { OrderBy } from "../../App";
import FeedItem from "../FeedItem/FeedItem";

import styles from "./Feed.module.css";

type Props = {
  availableVendors: VehVendorAvail[];
  searchParams: VehRentalCore;
  ordering: OrderBy;
  ascending: boolean;
};

function daysBetween(date1: Date, date2: Date) {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(date1.getTime() - date2.getTime());

  return Math.round(differenceMs / ONE_DAY);
}

function Feed(props: Props) {
  const [orderedCars, setOrderedCars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const ordered = props.availableVendors
      // For each vendor
      .map((availableVendor) => {
        return (
          availableVendor.VehAvails
            // add an array of Elements with an associated ordering based on what the user has selected
            .map((vehAvail) => {
              let order = parseFloat(vehAvail.TotalCharge["@RateTotalAmount"]);

              if (props.ordering === "doors") {
                order = parseInt(vehAvail.Vehicle["@DoorCount"]);
              } else if (props.ordering === "passengers") {
                order = parseInt(vehAvail.Vehicle["@PassengerQuantity"]);
              } else if (props.ordering === "bags") {
                order = parseInt(vehAvail.Vehicle["@BaggageQuantity"]);
              }

              if (!props.ascending) {
                order = -order;
              }

              return {
                order,
                element: (
                  <FeedItem
                    key={JSON.stringify(vehAvail)}
                    vehicle={vehAvail.Vehicle}
                    vendorName={availableVendor.Vendor["@Name"]}
                    totalCharge={vehAvail.TotalCharge}
                    pickUpFrom={props.searchParams.PickUpLocation["@Name"]}
                    days={daysBetween(
                      new Date(props.searchParams["@PickUpDateTime"]),
                      new Date(props.searchParams["@ReturnDateTime"])
                    )}
                  />
                ),
              };
            })
        );
      })
      // flatten the list because we have the elements like : [[Vendor1's cars], [Vendor2's cars], ...]
      .flat()
      // sort the list by the order
      .sort((a, b) => a.order - b.order)
      // return only the elements
      .map((car) => {
        return car.element;
      });

    setOrderedCars(ordered);
  }, [
    props.availableVendors,
    props.ordering,
    props.searchParams,
    props.ascending,
  ]);

  return <div className={styles.feed}>{orderedCars}</div>;
}

export default Feed;
