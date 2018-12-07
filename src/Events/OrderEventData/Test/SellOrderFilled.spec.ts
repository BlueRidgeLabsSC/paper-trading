import IData from "../../IData";
import SellOrderFilled from "../SellOrderFilled";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test SellOrderFilled initialization", () => {
  const sellOrderFilled = new SellOrderFilled("id", 1, data);

  test("expect version to be what was passed '1'", () => {
    expect(sellOrderFilled.version).toEqual(1);
  });

  test("expect side to be 'sell'", () => {
    expect(sellOrderFilled.side).toEqual("sell");
  });

  test("expect state to be 'filled'", () => {
    expect(sellOrderFilled.state).toEqual("filled");
  });

  test("expect data to be assigned", () => {
    expect(sellOrderFilled.data).toEqual(data);
  });
});
