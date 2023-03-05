import React from "react";
import { render, screen } from "@testing-library/react";
import Feed from "./Feed";

const testVendors = [
  {
    VehAvails: [
      {
        "@Status": "test",
        TotalCharge: {
          "@RateTotalAmount": "100",
          "@EstimatedTotalAmount": "100",
          "@CurrencyCode": "USD",
        },
        Vehicle: {
          VehMakeModel: {
            "@Name": "HIGHEST",
          },
          "@AirConditionInd": "test",
          "@TransmissionType": "test",
          "@FuelType": "test",
          "@BaggageQuantity": "test",
          "@DoorCount": "3",
          "@DriveType": "test",
          "@PassengerQuantity": "test",
          "@Code": "test",
          "@CodeContext": "test",
          PictureURL: "test",
        },
      },
      {
        "@Status": "test",
        TotalCharge: {
          "@RateTotalAmount": "1",
          "@EstimatedTotalAmount": "1",
          "@CurrencyCode": "USD",
        },
        Vehicle: {
          VehMakeModel: {
            "@Name": "LOWEST",
          },
          "@AirConditionInd": "test",
          "@TransmissionType": "test",
          "@FuelType": "test",
          "@BaggageQuantity": "test",
          "@DoorCount": "4",
          "@DriveType": "test",
          "@PassengerQuantity": "test",
          "@Code": "test",
          "@CodeContext": "test",
          PictureURL: "test",
        },
      },
      {
        "@Status": "test",
        TotalCharge: {
          "@RateTotalAmount": "50",
          "@EstimatedTotalAmount": "50",
          "@CurrencyCode": "USD",
        },
        Vehicle: {
          VehMakeModel: {
            "@Name": "MOST DOORS",
          },
          "@AirConditionInd": "test",
          "@TransmissionType": "test",
          "@FuelType": "test",
          "@BaggageQuantity": "test",
          "@DoorCount": "5",
          "@DriveType": "test",
          "@PassengerQuantity": "test",
          "@Code": "test",
          "@CodeContext": "test",
          PictureURL: "test",
        },
      },
    ],
    Vendor: {
      "@Name": "test",
      "@Code": "test",
    },
  },
];

const textSearchParams = {
  "@PickUpDateTime": "2021-01-01T00:00:00",
  "@ReturnDateTime": "2021-01-01T00:00:00",
  PickUpLocation: {
    "@Name": "test",
  },

  ReturnLocation: {
    "@Name": "test",
  },
};

test("highest price returned first when price selected and ascending is false", () => {
  render(
    <Feed
      availableVendors={testVendors}
      searchParams={textSearchParams}
      ordering={"price"}
      ascending={false}
    />
  );

  // find first id with "vehicleName"
  const firstVehicleName = screen.getAllByTestId("vehicleName")[0];

  expect(firstVehicleName).toHaveTextContent("HIGHEST");
});

test("lowest price returned first when price selected and ascending is true", () => {
  render(
    <Feed
      availableVendors={testVendors}
      searchParams={textSearchParams}
      ordering={"price"}
      ascending={true}
    />
  );

  // find first id with "vehicleName"
  const firstVehicleName = screen.getAllByTestId("vehicleName")[0];

  expect(firstVehicleName).toHaveTextContent("LOWEST");
});

test("highest doors returned first when bags selected and ascending is false", () => {
  render(
    <Feed
      availableVendors={testVendors}
      searchParams={textSearchParams}
      ordering={"doors"}
      ascending={false}
    />
  );

  // find first id with "vehicleName"
  const firstVehicleName = screen.getAllByTestId("vehicleName")[0];

  expect(firstVehicleName).toHaveTextContent("MOST DOORS");
});
