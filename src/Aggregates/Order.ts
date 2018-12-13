import AggregateBase from "./AggregateBase";
import CommandBroker from "../CommandBroker";
import OrderData from "../Data/OrderData";
import OrderMetadata from "../Metadata/OrderMetadata";
import { validateOrderAction } from "utils";

export default class Order extends AggregateBase {
  state: string;
  side: string;
  data: OrderData;
  metaData: OrderMetadata;

  constructor(
    broker: CommandBroker,
    side: string,
    aggregate_id: string,
    data?: OrderData,
    metaData?: OrderMetadata,
    version?: number,
    state: string = "placed"
  ) {
    super(broker, aggregate_id, version);
    this.side = side;
    this.data = data;
    this.metaData = metaData;
    this.state = state;
  }

  queue(data: OrderData): void {
    this.state = "queued";
    this.data = data;
  }

  fill(data: OrderData): void {
    this.state = "filled";
    this.data = data;
  }

  partiallyFilled(data: OrderData): void {
    this.state = "partially_filled";
    this.data = data;
  }

  cancel(data: OrderData): void {
    this.state = "canceled";
    this.data = data;
  }
}
