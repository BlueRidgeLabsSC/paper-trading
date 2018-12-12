import IData from "../../../Data/IData";
import OrderPlaced from "../OrderPlaced";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test BuyOrderPlaced initialization", () => {
  const buyOrderPlaced = new OrderPlaced("buy", "id", 0, data);

  test("expect side to be 'buy'", () => {
    expect(buyOrderPlaced.side).toEqual("buy");
  });

  test("expect state to be 'placed'", () => {
    expect(buyOrderPlaced.state).toEqual("placed");
  });

  test("expect version to be 0", () => {
    expect(buyOrderPlaced.version).toEqual(0);
  });

  test("expect data to be assigned", () => {
    expect(buyOrderPlaced.data).toEqual(data);
  });
});
