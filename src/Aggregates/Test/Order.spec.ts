import Order from "../Order";
import OrderData from "../../Data/OrderData";
import CommandBroker from "../../CommandBroker";

beforeEach(() => {
  jest.resetModules();
});

describe("Initializing Order Aggregate", () => {
  jest.doMock("../../CommandBroker");
  const CommandBroker = require("../../CommandBroker").default;
  const broker = new CommandBroker();
  const order = new Order(broker, "buy", "id");

  test("make sure order is defined", () => {
    expect(order).toBeDefined();
  });
});

describe("test order state mutation", () => {
  const broker = new CommandBroker();
  const order = new Order(broker, "buy", "id");
  const Data = jest.fn<OrderData>();
  const data = new Data();

  test("order placed", () => {
    expect(order.side).toBe("buy");
  });

  test("order queued", () => {
    order.queue(data);
    expect(order.state).toBe("queued");
  });

  test("order filled", () => {
    order.fill(data);
    expect(order.state).toBe("filled");
  });

  test("order canceled", () => {
    order.cancel(data);
    expect(order.state).toBe("canceled");
  });
});
