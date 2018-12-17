import Position from "../Position";

beforeEach(() => {
  jest.resetModules();
});

jest.doMock("../../CommandBroker");
const CommandBroker = require("../../CommandBroker").default;

describe("Initializing Order Aggregate", () => {
  const broker = new CommandBroker();
  const order = new Position(broker, "id", "BR");

  test("make sure position is defined", () => {
    expect(order).toBeDefined();
  });
});

describe("test order state mutation", () => {
  const broker = new CommandBroker();
  const order = new Position(broker, "id", "BR");

  test("add to position", () => {
    order.add(2, 200);
    expect(order.quantity).toBe(2);
    expect(order.average_price).toBe(200);
    expect(order.closed).toBeFalsy();
  });

  test("add more to position", () => {
    order.add(4, 400);
    expect(order.quantity).toBe(6);
    expect(order.average_price).toBe(600);
    expect(order.closed).toBeFalsy();
  });

  test("sell some from position", () => {
    order.remove(2, 400);
    expect(order.quantity).toBe(4);
    expect(order.average_price).toBe(200);
    expect(order.closed).toBeFalsy();
  });

  test("sell some more from position", () => {
    order.remove(4, 800);
    expect(order.quantity).toBe(0);
    expect(order.average_price).toBe(-600);
    expect(order.closed).toBeTruthy();
  });
});
