import CancelOrder from "../CancelOrder";
import OrderData from "../../Data/OrderData";

const MockedData = jest.fn<OrderData>();
const data = new MockedData();

describe("test CancelOrder initialization", () => {
  const order = new CancelOrder(data);

  test("expect state to be 'cancel'", () => {
    expect(order.state).toEqual("cancel");
  });

  test("expect data to be the given data", () => {
    expect(order.data).toEqual(data);
  });
});
