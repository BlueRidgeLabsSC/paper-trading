import FillOrder from "../FillOrder";
import OrderData from "../../Data/OrderData";

const MockedData = jest.fn<OrderData>();
const data = new MockedData();

describe("test FillOrder initialization", () => {
  const order = new FillOrder(data, 0);

  test("expect state to be 'fill'", () => {
    expect(order.state).toEqual("fill");
  });

  test("expect data to be the given data", () => {
    expect(order.data).toEqual(data);
  });
});
