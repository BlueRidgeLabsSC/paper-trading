import IData from "../../IData";
import SellOrderPlaced from "../SellOrderPlaced";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test SellOrderPlaced initialization", () => {
  const sellOrderPlaced = new SellOrderPlaced(data);

  test("expect side to be 'sell'", () => {
    expect(sellOrderPlaced.side).toEqual("sell");
  });

  test("expect state to be 'placed'", () => {
    expect(sellOrderPlaced.state).toEqual("placed");
  });

  test("expect version to be 0", () => {
    expect(sellOrderPlaced.version).toEqual(0);
  });

  test("expect new aggregate_id to be assigned", () => {
    expect(sellOrderPlaced.aggregate_id).toBeDefined();
  });

  test("expect data to be assigned", () => {
    expect(sellOrderPlaced.data).toEqual(data);
  });
});
