import Event from "../Event";
import IEventData from "../EventData/IEventData";

const MockedEventData = jest.fn<IEventData>(() => ({
  aggregate_id: "aggregate_id",
  version: 0,
  constructor: { name: "Mocked" }
}));

describe("test event's event data assignment", () => {
  const data = new MockedEventData();

  const user_id = "user_id";
  const event = new Event(user_id, data);

  test("expect passed user_id to get assigned correctly", () => {
    expect(event.user_id == user_id).toBeTruthy();
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
