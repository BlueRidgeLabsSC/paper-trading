import IData from "../../../Data/IData";
import OrderPartiallyFilled from "../OrderPartiallyFilled";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test BuyOrderPartiallyFilled initialization", () => {
  const buyOrderPartiallyFilled = new OrderPartiallyFilled(
    "buy",
    "id",
    1,
    data
  );

  test("expect version to be what was passed '1'", () => {
    expect(buyOrderPartiallyFilled.version).toEqual(1);
  });

  test("expect side to be 'buy'", () => {
    expect(buyOrderPartiallyFilled.side).toEqual("buy");
  });

  test("expect state to be 'partially_filled'", () => {
    expect(buyOrderPartiallyFilled.state).toEqual("partially_filled");
  });

  test("expect data to be assigned", () => {
    expect(buyOrderPartiallyFilled.data).toEqual(data);
  });
});
