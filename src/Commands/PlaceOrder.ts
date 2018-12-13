import { v4 as uuid } from "uuid";
import OrderBase from "./OrderBase";
import OrderData from "../Data/OrderData";
import OrderMetadata from "../Metadata/OrderMetadata";

export default class PlaceOrder extends OrderBase {
  state = "place";
  side: string;

  constructor(
    side: string,
    data: OrderData,
    aggregate_id: string = uuid(),
    metadata?: OrderMetadata
  ) {
    super(data, 0, aggregate_id, metadata);
    this.side = side;
  }
}
