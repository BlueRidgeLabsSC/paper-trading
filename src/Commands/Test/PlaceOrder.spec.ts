import PlaceOrder from "../PlaceOrder";
import OrderData from "../../Data/OrderData";

const MockedData = jest.fn<OrderData>();
const data = new MockedData();

describe("test PlaceOrder initialization", () => {
  const placeOrder = new PlaceOrder("buy", data);

  test("expect state to be 'place'", () => {
    expect(placeOrder.state).toEqual("place");
  });

  test("expect side to be 'buy'", () => {
    expect(placeOrder.side).toEqual("buy");
  });

  test("expect data to be the given data", () => {
    expect(placeOrder.data).toEqual(data);
  });
});
