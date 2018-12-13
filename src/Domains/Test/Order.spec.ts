import Order from "../Order";
import CommandBroker from "../../CommandBroker";
import PlaceOrder from "../../Commands/PlaceOrder";
import QueueOrder from "../../Commands/QueueOrder";
import CancelOrder from "../../Commands/CancelOrder";
import FillOrder from "../../Commands/FillOrder";
import OrderData from "../../Data/OrderData";

beforeEach(() => {
  jest.resetModules();
});

describe("test 'Order' events registration on initialization", () => {
  jest.doMock("../../CommandBroker");
  const CommandBroker = require("../../CommandBroker").default;

  const broker = new CommandBroker();
  test("make sure we register 4 events", () => {
    new Order(broker);
    expect(broker.register).toBeCalledTimes(4);
  });

  test("make sure we register to PlaceOrder events", () => {
    new Order(broker);
    expect(broker.register).toHaveBeenCalledWith(
      PlaceOrder.name,
      expect.anything()
    );
  });

  test("make sure we register to QueueOrder events", () => {
    new Order(broker);
    expect(broker.register).toHaveBeenCalledWith(
      QueueOrder.name,
      expect.anything()
    );
  });

  test("make sure we register to CancelOrder events", () => {
    new Order(broker);
    expect(broker.register).toHaveBeenCalledWith(
      CancelOrder.name,
      expect.anything()
    );
  });

  test("make sure we register to FillOrder events", () => {
    new Order(broker);
    expect(broker.register).toHaveBeenCalledWith(
      FillOrder.name,
      expect.anything()
    );
  });
});

describe("dispatching a place order event", () => {
  const broker = new CommandBroker();

  const order = new Order(broker);

  broker.dispatch(new PlaceOrder("buy", new OrderData(), "id"));

  test("expect new aggregate to be created and stored", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate).toBeDefined();
  });

  test("expect version '0'", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate.version).toBe(0);
  });

  test("expect side version 'buy'", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate.side).toBe("buy");
  });

  test("expect state to be 'placed'", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate.state).toBe("placed");
  });
});

describe("dispatching a place order event", () => {
  const broker = new CommandBroker();

  const order = new Order(broker);

  broker.dispatch(new PlaceOrder("buy", new OrderData(), "id"));
  broker.dispatch(new QueueOrder(new OrderData(), 0, "id"));

  test("expect new aggregate to be created and stored", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate).toBeDefined();
  });

  test("expect version '1'", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate.version).toBe(1);
  });

  test("expect state to be 'placed'", async () => {
    const orderAggregate = await order.get("id");
    expect(orderAggregate.state).toBe("queued");
  });
});
