import { v4 as uuid } from "uuid";
import AggregateBase from "./AggregateBase";
import CommandBroker from "../CommandBroker";
import OrderPlaced from "../EventData/OrderEventData/OrderPlaced";
import OrderQueued from "../EventData/OrderEventData/OrderQueued";
import OrderFilled from "../EventData/OrderEventData/OrderFilled";
import OrderPartiallyFilled from "../EventData/OrderEventData/OrderPartiallyFilled";
import OrderCanceled from "../EventData/OrderEventData/OrderCanceled";
import OrderData from "../Data/OrderData";
import OrderMetadata from "../Metadata/OrderMetadata";
import { validateOrderAction } from "../utils";

export default class Order extends AggregateBase {
  state: string;
  side: string;
  data: OrderData;
  metaData: OrderMetadata;

  constructor(
    broker: CommandBroker,
    aggregate_id?: string,
    data?: OrderData,
    metaData?: OrderMetadata
  ) {
    super();
    this.aggregate_id = aggregate_id || uuid();
    this.data = data;
    this.metaData = metaData;

    broker.register(OrderPlaced.name, this.handleOrderPlaced.bind(this));
    broker.register(OrderQueued.name, this.handleOrderQueued.bind(this));
    broker.register(OrderFilled.name, this.handleOrderFilled.bind(this));

    broker.register(
      OrderPartiallyFilled.name,
      this.handleOrderPartiallyFilled.bind(this)
    );

    broker.register(OrderCanceled.name, this.handleOrderCanceled.bind(this));
  }

  @validateOrderAction
  handleOrderPlaced(order: OrderPlaced): void {
    this.state = "placed";
    this.side = order.side;
    this.data = order.data;
  }

  @validateOrderAction
  handleOrderQueued(order: OrderQueued): void {
    this.state = "queued";
    this.data = order.data;
  }

  @validateOrderAction
  handleOrderFilled(order: OrderFilled): void {
    this.state = "filled";
    this.data = order.data;
  }

  @validateOrderAction
  handleOrderPartiallyFilled(order: OrderPartiallyFilled): void {
    this.state = "partially_filled";
    this.data = order.data;
  }

  @validateOrderAction
  handleOrderCanceled(order: OrderCanceled): void {
    this.state = "canceled";
    this.data = order.data;
  }
}
