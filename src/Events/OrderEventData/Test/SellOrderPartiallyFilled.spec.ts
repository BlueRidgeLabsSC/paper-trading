import IData from "../../IData";
import SellOrderPartiallyFilled from "../SellOrderPartiallyFilled";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test SellOrderPartiallyFilled initialization", () => {
  const sellOrderPartiallyFilled = new SellOrderPartiallyFilled("id", 1, data);

  test("expect version to be what was passed '1'", () => {
    expect(sellOrderPartiallyFilled.version).toEqual(1);
  });

  test("expect side to be 'sell'", () => {
    expect(sellOrderPartiallyFilled.side).toEqual("sell");
  });

  test("expect state to be 'partially_filled'", () => {
    expect(sellOrderPartiallyFilled.state).toEqual("partially_filled");
  });

  test("expect data to be assigned", () => {
    expect(sellOrderPartiallyFilled.data).toEqual(data);
  });
});
