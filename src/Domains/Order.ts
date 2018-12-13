import DomainBase from "./DomainBase";
import OrderAggregate from "../Aggregates/Order";
import CommandBroker from "../CommandBroker";
import PlaceOrder from "../Commands/PlaceOrder";
import QueueOrder from "../Commands/QueueOrder";
import CancelOrder from "../Commands/CancelOrder";
import FillOrder from "../Commands/FillOrder";
import OrderPlaced from "../EventData/OrderEventData/OrderPlaced";
import OrderQueued from "../EventData/OrderEventData/OrderQueued";
import OrderCanceled from "../EventData/OrderEventData/OrderCanceled";
import OrderFilled from "../EventData/OrderEventData/OrderFilled";

export default class Order extends DomainBase<OrderAggregate> {
  constructor(broker: CommandBroker) {
    super(broker);

    broker.register(PlaceOrder.name, this.place.bind(this));
    broker.register(QueueOrder.name, this.queue.bind(this));
    broker.register(CancelOrder.name, this.cancel.bind(this));
    broker.register(FillOrder.name, this.fill.bind(this));
  }

  private async place(placeOrder: PlaceOrder) {
    const order = new OrderAggregate(
      this.broker,
      placeOrder.aggregate_id,
      placeOrder.data,
      placeOrder.metadata
    );

    this.list.push(order);

    this.broker.dispatch(
      new OrderPlaced(
        placeOrder.side,
        order.aggregate_id,
        order.version,
        order.data
      )
    );
  }

  private async queue(queueOrder: QueueOrder) {
    const order = await this.get(queueOrder.aggregate_id);

    if (order.state != "placed") return;

    this.broker.dispatch(
      new OrderQueued(
        order.side,
        queueOrder.aggregate_id,
        order.version,
        queueOrder.data
      )
    );
  }

  private async cancel(cancelOrder: CancelOrder) {
    const order = await this.get(cancelOrder.aggregate_id);

    if (order.state == "placed" || order.state == "queued") {
      this.broker.dispatch(
        new OrderCanceled(
          order.side,
          cancelOrder.aggregate_id,
          order.version,
          cancelOrder.data
        )
      );
    }
  }

  private async fill(fillOrder: FillOrder) {
    const order = await this.get(fillOrder.aggregate_id);

    if (order.state != "queued") return;

    this.broker.dispatch(
      new OrderFilled(
        order.side,
        fillOrder.aggregate_id,
        order.version,
        fillOrder.data
      )
    );
  }
}
