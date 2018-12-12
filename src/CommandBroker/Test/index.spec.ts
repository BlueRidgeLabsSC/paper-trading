import CommandBroker from "..";
import PlaceOrder from "../../Commands/PlaceOrder";
import OrderData from "../../Data/OrderData";
import { EventEmitter } from "events";

describe("testing Command Broker class", () => {
  test("should register callback", () => {
    const mockCallback = jest.fn<EventEmitter>();
    const emitter = new mockCallback();
    emitter.addListener = jest.fn();
    const broker = new CommandBroker(emitter);
    broker.register(PlaceOrder.name, mockCallback);
    expect(emitter.addListener).toBeCalledTimes(1);
    expect(emitter.addListener).toHaveBeenCalledWith(
      PlaceOrder.name,
      mockCallback
    );
  });

  test("should unregister callback", () => {
    const mockCallback = jest.fn<EventEmitter>();
    const emitter = new mockCallback();
    emitter.removeListener = jest.fn();
    const broker = new CommandBroker(emitter);
    broker.unregister(PlaceOrder.name, mockCallback);
    expect(emitter.removeListener).toBeCalledTimes(1);
    expect(emitter.removeListener).toHaveBeenCalledWith(
      PlaceOrder.name,
      mockCallback
    );
  });

  test("should call emit", () => {
    const mockCallback = jest.fn<EventEmitter>();
    const emitter = new mockCallback();
    emitter.emit = jest.fn();
    const broker = new CommandBroker(emitter);
    broker.dispatch(new PlaceOrder("buy", new OrderData(), "id"));
    expect(emitter.emit).toBeCalledTimes(1);
  });

  test("should call emit with data", () => {
    const mockCallback = jest.fn<EventEmitter>();
    const emitter = new mockCallback();
    emitter.emit = jest.fn();
    const broker = new CommandBroker(emitter);
    const data = new PlaceOrder("buy", new OrderData(), "id");
    broker.dispatch(data);
    expect(emitter.emit).toHaveBeenCalledWith(data.constructor.name, data);
  });

  test("should call the callback when dispatch", () => {
    const mockCallback = jest.fn();
    const broker = new CommandBroker();
    broker.register(PlaceOrder.name, mockCallback);
    broker.dispatch(new PlaceOrder("buy", new OrderData(), "id"));
    expect(mockCallback).toBeCalledTimes(1);
  });

  test("should call all callbacks when dispatch", async () => {
    const callback = jest.fn();
    const mockCallback1 = () => callback();
    const mockCallback2 = () => callback();
    const mockCallback3 = () => callback();
    const mockCallback4 = () => callback();
    const broker = new CommandBroker();

    broker.register(PlaceOrder.name, mockCallback1);
    broker.register(PlaceOrder.name, mockCallback2);
    broker.register(PlaceOrder.name, mockCallback3);
    broker.register(PlaceOrder.name, mockCallback4);

    broker.dispatch(new PlaceOrder("buy", new OrderData(), "id"));
    expect(callback).toBeCalledTimes(4);
  });
});
