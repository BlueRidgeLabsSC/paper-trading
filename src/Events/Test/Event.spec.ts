import Event from "../Event";
import IEventData from "../../EventData/IEventData";

const MockedEventData = jest.fn<IEventData>(() => ({
  aggregate_id: "aggregate_id",
  version: 0,
  constructor: { name: "Mocked" }
}));

describe("test event initialization", () => {
  const data = new MockedEventData();

  const account_id = "account_id";
  const event = new Event(account_id, data);

  test("expect passed account_id to get assigned correctly", () => {
    expect(event.account_id == account_id).toBeTruthy();
  });

  test("Event should have the same aggregate_id as event data", () => {
    expect(event.aggregate_id == data.aggregate_id).toBeTruthy();
  });

  test("Event should have its type as the instance of the event data", () => {
    expect(event.type == "Mocked").toBeTruthy();
  });

  test("Event should store event data", () => {
    expect(event.data == data).toBeTruthy();
  });
});
