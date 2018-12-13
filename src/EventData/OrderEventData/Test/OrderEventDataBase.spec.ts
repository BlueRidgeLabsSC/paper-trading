import OrderEventDataBase from "../OrderEventDataBase";
import IData from "../../../Data/IData";

class OrderEventDataTest extends OrderEventDataBase {
  state = "test_state__filled";
}

const MockedData = jest.fn<IData>();

const version = 0;
const aggregate_id = "aggregate_id";
const data = new MockedData();

describe("test OrderEventData initialization", () => {
  const eventData = new OrderEventDataTest("buy", aggregate_id, version, data);

  test("expect OrderEventData to match snapshot", () => {
    expect(eventData).toMatchSnapshot();
  });
});
