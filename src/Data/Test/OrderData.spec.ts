import OrderData from "../OrderData";

describe("test event initialization", () => {
  const data = new OrderData();
  data.price = 1.2;
  data.average_price = 1.6;
  data.cumulative_quantity = 30;
  data.fees = 20;
  data.symbol = "AAPL";
  data.type = "limit";

  test("expect object to match snapshot", () => {
    expect(data).toMatchSnapshot();
  });
});
