import IEventData from "../EventData/IEventData";

interface IEvent {
  id: string;
  type: string;
  account_id: string;
  aggregate_id: string;
  created_on: Date;
  data: IEventData;
  version: number;
}

export default IEvent;
