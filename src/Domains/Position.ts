import DomainBase from "./DomainBase";
import PositionAggregate from "../Aggregates/Position";
import CommandBroker from "../CommandBroker";
import OrderFilled from "../EventData/OrderEventData/OrderFilled";
import OrderPlaced from "../EventData/OrderEventData/OrderPlaced";
import PositionOpened from "../EventData/OrderEventData/PositionOpened";
import PositionClosed from "../EventData/OrderEventData/PositionClosed";
import PositionFilled from "../EventData/OrderEventData/PositionFilled";

export default class Position extends DomainBase<PositionAggregate> {
  constructor(broker: CommandBroker) {
    super(broker);

    broker.register(OrderPlaced.name, this.open.bind(this));
    broker.register(OrderFilled.name, this.fill.bind(this));
  }

  private async open(order: OrderPlaced) {
    const position = new PositionAggregate(
      this.broker,
      order.data.symbol,
      order.aggregate_id
    );

    this.list.push(position);

    this.broker.dispatch(
      new PositionOpened(
        position.average_price,
        position.quantity,
        position.symbol,
        position.aggregate_id,
        position.version
      )
    );
  }

  private async fill(order: OrderFilled) {
    const position = await this.get(order.aggregate_id);

    if (order.version != position.version) {
      throw new Error("figure out what needs to happen here");
    }

    position.version++;
    if (order.side == "buy")
      position.add(order.data.quantity, order.data.average_price);
    else position.remove(order.data.quantity, order.data.average_price);

    if (position.closed) {
      this.broker.dispatch(
        new PositionClosed(
          position.average_price,
          position.symbol,
          position.aggregate_id,
          position.version
        )
      );
    } else {
      this.broker.dispatch(
        new PositionFilled(
          position.average_price,
          position.quantity,
          position.symbol,
          position.aggregate_id,
          position.version
        )
      );
    }
  }

  async getNonZero(): Promise<Array<PositionAggregate>> {
    return this.list.filter(p => p.quantity > 0 && !p.closed);
  }

  async getBySymbol(symbol: string): Promise<PositionAggregate> {
    return this.list.find(p => p.symbol == symbol && !p.closed);
  }

  async getAll(): Promise<Array<PositionAggregate>> {
    return this.list.filter(p => !p.closed);
  }
}
