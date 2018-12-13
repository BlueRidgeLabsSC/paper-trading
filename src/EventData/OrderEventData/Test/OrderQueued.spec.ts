import IData from "../../../Data/IData";
import OrderQueued from "../OrderQueued";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test BuyOrderQueued initialization", () => {
  const buyOrderQueued = new OrderQueued("buy", "id", 1, data);

  test("expect side to be 'buy'", () => {
    expect(buyOrderQueued.side).toEqual("buy");
  });

  test("expect version to be what was passed '1'", () => {
    expect(buyOrderQueued.version).toEqual(1);
  });

  test("expect state to be 'queued'", () => {
    expect(buyOrderQueued.state).toEqual("queued");
  });

  test("expect data to be assigned", () => {
    expect(buyOrderQueued.data).toEqual(data);
  });
});
