type Destination = {
  time: Date;
  city: string;
  airportCode: string;
};

type Route = {
  from: Destination;
  to: Destination;
};

export type FlightData = {
  carrier: string;
  refundable: boolean;
  route: Route;

  priceInformation: {
    price: number;
    currency: string;
  };

  otherTime?: Route[];
};
