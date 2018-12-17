import Position from "../Position";
import CommandBroker from "../../CommandBroker";
import OrderData from "../../Data/OrderData";
import OrderPlaced from "../../EventData/OrderEventData/OrderPlaced";
import OrderFilled from "../../EventData/OrderEventData/OrderFilled";
import { timeout } from "../../utils";

beforeEach(() => {
  jest.resetModules();
});

describe("test 'Order' events registration on initialization", () => {
  jest.doMock("../../CommandBroker");
  const CommandBroker = require("../../CommandBroker").default;

  const broker = new CommandBroker();
  test("make sure we register 2 events", () => {
    new Position(broker);
    expect(broker.register).toBeCalledTimes(2);
  });

  test("make sure we register to OrderPlaced events", () => {
    new Position(broker);
    expect(broker.register).toHaveBeenCalledWith(
      OrderPlaced.name,
      expect.anything()
    );
  });

  test("make sure we register to OrderFilled events", () => {
    new Position(broker);
    expect(broker.register).toHaveBeenCalledWith(
      OrderFilled.name,
      expect.anything()
    );
  });
});

describe("dispatching a placed order event", () => {
  const broker = new CommandBroker();

  const order = new Position(broker);

  const orderData = new OrderData();
  orderData.symbol = "SAD";

  broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));

  test("expect new position aggregate to be created and stored", async () => {
    const positionAggregate = await order.get("id");
    expect(positionAggregate).toBeDefined();
  });
});

describe("dispatching a filled order buy and then sell events", () => {
  const broker = new CommandBroker();
  let orderAggregate;
  const order = new Position(broker);

  const orderData = new OrderData();
  orderData.symbol = "SAD";
  broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));

  orderData.average_price = 100;
  orderData.quantity = 10;

  test("expect orderAggregate to updated with new price and quantity", async () => {
    orderAggregate = await order.getBySymbol("SAD");
    broker.dispatch(
      new OrderFilled("buy", "id", orderAggregate.version, orderData)
    );
    orderAggregate = await order.getBySymbol("SAD");

    expect(orderAggregate.average_price).toBe(100);
    expect(orderAggregate.quantity).toBe(10);
  });

  test("expect orderAggregate to updated with new price and quantity", async () => {
    orderAggregate = await order.getBySymbol("SAD");

    broker.dispatch(
      new OrderFilled(
        "sell",
        orderAggregate.aggregate_id,
        orderAggregate.version,
        orderData
      )
    );

    orderAggregate = await order.get(orderAggregate.aggregate_id);
    expect(orderAggregate.average_price).toBe(0);
    expect(orderAggregate.quantity).toBe(0);
    expect(orderAggregate.closed).toBeTruthy();
  });
});

describe("test get zero position", () => {
  const broker = new CommandBroker();
  let orderAggregate;
  const order = new Position(broker);

  const orderData = new OrderData();
  orderData.symbol = "SAD";
  broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));

  test("nonzero should return zero positions", async () => {
    orderAggregate = await order.getNonZero();
    expect(orderAggregate.length).toBe(0);
  });
});

describe("test get zero position", () => {
  const broker = new CommandBroker();
  let orderAggregate;
  const order = new Position(broker);

  const orderData = new OrderData();
  orderData.average_price = 100;
  orderData.quantity = 10;
  orderData.symbol = "SAD";
  broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));

  test("nonzero should return one positions", async () => {
    broker.dispatch(new OrderFilled("buy", "id", 0, orderData));
    await timeout(10);
    orderAggregate = await order.getNonZero();
    expect(orderAggregate.length).toBe(1);
  });
});

describe("test placing multiple orders", () => {
  const broker = new CommandBroker();

  test("test multiple orders", async () => {
    let orderAggregate;
    const order = new Position(broker);
    const orderData = new OrderData();
    orderData.average_price = 100;
    orderData.quantity = 10;
    orderData.symbol = "SAD";

    broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));
    broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));
    broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));
    broker.dispatch(new OrderPlaced("buy", "id", 0, orderData));
    broker.dispatch(new OrderFilled("buy", "id", 0, orderData));

    orderAggregate = await order.getAll();
    expect(orderAggregate.length).toBe(4);
  });
});
