import IData from "../../IData";
import SellOrderCanceled from "../SellOrderCanceled";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test SellOrderCanceled initialization", () => {
  const sellOrderCanceled = new SellOrderCanceled("id", 1, data);

  test("expect version to be what was passed '1'", () => {
    expect(sellOrderCanceled.version).toEqual(1);
  });

  test("expect side to be 'buy'", () => {
    expect(sellOrderCanceled.side).toEqual("sell");
  });

  test("expect state to be 'canceled'", () => {
    expect(sellOrderCanceled.state).toEqual("canceled");
  });

  test("expect data to be assigned", () => {
    expect(sellOrderCanceled.data).toEqual(data);
  });
});
