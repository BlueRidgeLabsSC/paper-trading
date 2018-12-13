import IData from "../../../Data/IData";
import OrderFilled from "../OrderFilled";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test BuyOrderFilled initialization", () => {
  const buyOrderFilled = new OrderFilled("buy", "id", 1, data);

  test("expect side to be 'buy'", () => {
    expect(buyOrderFilled.side).toEqual("buy");
  });

  test("expect version to be what was passed '1'", () => {
    expect(buyOrderFilled.version).toEqual(1);
  });

  test("expect state to be 'filled'", () => {
    expect(buyOrderFilled.state).toEqual("filled");
  });

  test("expect data to be assigned", () => {
    expect(buyOrderFilled.data).toEqual(data);
  });
});
