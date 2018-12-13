import EventDataBase from "../EventDataBase";
import IData from "../../Data/IData";

class EventDataTest extends EventDataBase {
  side: "buy";
}

const MockedData = jest.fn<IData>();

const version = 0;
const aggregate_id = "aggregate_id";
const data = new MockedData();

describe("test EventData initialization", () => {
  const eventData = new EventDataTest(aggregate_id, version, data);

  test("expect passed aggregate_id to get assigned correctly", () => {
    expect(eventData.aggregate_id == aggregate_id).toBeTruthy();
  });

  test("expect passed version to get assigned correctly", () => {
    expect(eventData.version == version).toBeTruthy();
  });

  test("expect passed data to get assigned correctly", () => {
    expect(eventData.data == data).toBeTruthy();
  });
});
