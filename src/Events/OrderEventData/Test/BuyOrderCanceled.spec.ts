import IData from "../../IData";
import BuyOrderCanceled from "../BuyOrderCanceled";

const MockedData = jest.fn<IData>(() => ({ testData: "test" }));
const data = new MockedData();

describe("test BuyOrderCanceled initialization", () => {
  const buyOrderCanceled = new BuyOrderCanceled("id", 1, data);

  test("expect version to be what was passed '1'", () => {
    expect(buyOrderCanceled.version).toEqual(1);
  });

  test("expect side to be 'buy'", () => {
    expect(buyOrderCanceled.side).toEqual("buy");
  });

  test("expect state to be 'canceled'", () => {
    expect(buyOrderCanceled.state).toEqual("canceled");
  });

  test("expect data to be assigned", () => {
    expect(buyOrderCanceled.data).toEqual(data);
  });
});
