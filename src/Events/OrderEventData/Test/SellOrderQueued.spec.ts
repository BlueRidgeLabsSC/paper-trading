import IData from "../../IData";
import SellOrderQueued from "../SellOrderQueued";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test SellOrderQueued initialization", () => {
  const sellOrderQueued = new SellOrderQueued("id", 1, data);

  test("expect version to be what was passed '1'", () => {
    expect(sellOrderQueued.version).toEqual(1);
  });

  test("expect side to be 'sell'", () => {
    expect(sellOrderQueued.side).toEqual("sell");
  });

  test("expect state to be 'queued'", () => {
    expect(sellOrderQueued.state).toEqual("queued");
  });

  test("expect data to be assigned", () => {
    expect(sellOrderQueued.data).toEqual(data);
  });
});
