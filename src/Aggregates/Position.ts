import AggregateBase from "./AggregateBase";
import CommandBroker from "CommandBroker";

export default class Position extends AggregateBase {
  closed: boolean;
  symbol: string;
  quantity: number = 0;
  average_price: number = 0;

  constructor(
    broker: CommandBroker,
    symbol: string,
    aggregate_id: string,
    version: number = 0
  ) {
    super(broker, aggregate_id, version);
    this.broker = broker;
    this.aggregate_id = aggregate_id;
    this.version = version;
    this.symbol = symbol;
  }

  add(qty: number, cost: number) {
    this.average_price = this.average_price + cost;
    this.quantity += qty;
  }

  remove(qty: number, claimed: number) {
    this.quantity -= qty;
    this.average_price -= claimed;
    this.closed = this.quantity == 0;
  }
}
