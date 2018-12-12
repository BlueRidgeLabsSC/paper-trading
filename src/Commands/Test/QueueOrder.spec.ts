import QueueOrder from "../QueueOrder";
import OrderData from "../../Data/OrderData";

const MockedData = jest.fn<OrderData>();
const data = new MockedData();

describe("test QueueOrder initialization", () => {
  const placeOrder = new QueueOrder(data);

  test("expect state to be 'queue'", () => {
    expect(placeOrder.state).toEqual("queue");
  });

  test("expect data to be the given data", () => {
    expect(placeOrder.data).toEqual(data);
  });
});
