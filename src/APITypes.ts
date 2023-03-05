export type Vendor = {
  "@Name": string;
  "@Code": string;
};

export type Vehicle = {
  "@AirConditionInd": string;
  "@TransmissionType": string;
  "@FuelType": string;
  "@BaggageQuantity": string;
  "@Code": string;
  "@CodeContext": string;
  "@DoorCount": string;
  "@DriveType": string;
  "@PassengerQuantity": string;
  PictureURL: string;
  VehMakeModel: {
    "@Name": string;
  };
};

export type TotalCharge = {
  "@RateTotalAmount": string;
  "@EstimatedTotalAmount": string;
  "@CurrencyCode": string;
};

export type VehAvail = {
  "@Status": string;
  TotalCharge: TotalCharge;
  Vehicle: Vehicle;
};

export type VehVendorAvail = {
  Vendor: Vendor;
  VehAvails: VehAvail[];
};

export type Location = {
  "@Name": string;
};

export type VehRentalCore = {
  "@PickUpDateTime": string;
  "@ReturnDateTime": string;
  PickUpLocation: Location;
  ReturnLocation: Location;
};

export type CTResponse = {
  VehAvailRSCore: {
    VehRentalCore: VehRentalCore;
    VehVendorAvails: VehVendorAvail[];
  };
};
