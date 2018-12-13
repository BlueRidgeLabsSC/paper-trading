import AggregateBase from "./AggregateBase";
import CommandBroker from "../CommandBroker";
import OrderPlaced from "../EventData/OrderEventData/OrderPlaced";
import OrderFilled from "../EventData/OrderEventData/OrderFilled";
import OrderPartiallyFilled from "../EventData/OrderEventData/OrderPartiallyFilled";
import OrderCanceled from "../EventData/OrderEventData/OrderCanceled";

// todo: figure out how to deal with updating the account

export default class Account extends AggregateBase {
  private totalValue: number;
  private availableCash: number;
  private reservedCash: number;
  private stockValue: number;

  constructor(broker: CommandBroker) {
    super(broker, "account");

    broker.register(OrderPlaced.name, this.handleOrderPlaced.bind(this));
    broker.register(OrderFilled.name, this.handleOrderFilled.bind(this));

    broker.register(
      OrderPartiallyFilled.name,
      this.handleOrderPartiallyFilled.bind(this)
    );

    broker.register(OrderCanceled.name, this.handleOrderCanceled.bind(this));
  }

  handleOrderPlaced(order: OrderPlaced): void {
    const orderTotal = order.data.price * order.data.quantity;
    this.availableCash = this.availableCash - orderTotal;
    this.reservedCash = this.reservedCash + orderTotal;
    this.totalValue = this.availableCash + this.reservedCash + this.stockValue;
  }

  handleOrderFilled(order: OrderFilled): void {
    const orderTotal = order.data.average_price * order.data.quantity;
    this.availableCash = this.availableCash - orderTotal;
    this.reservedCash = this.reservedCash - orderTotal;
    this.stockValue = this.stockValue + orderTotal;
    this.totalValue = this.availableCash + this.reservedCash + this.stockValue;
  }

  handleOrderPartiallyFilled(order: OrderPartiallyFilled): void {
    new Error("not implemented");
  }

  handleOrderCanceled(order: OrderCanceled): void {
    const orderTotal = order.data.average_price * order.data.quantity;
    this.availableCash = this.availableCash + orderTotal;
    this.reservedCash = this.reservedCash - orderTotal;
    this.totalValue = this.availableCash + this.reservedCash + this.stockValue;
  }

  get() {
    return {
      totalValue: this.totalValue,
      availableCash: this.availableCash,
      reservedCash: this.reservedCash,
      stockValue: this.stockValue
    };
  }
}
