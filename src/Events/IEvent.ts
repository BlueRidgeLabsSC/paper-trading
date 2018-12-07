import IEventData from "./IEventData";

interface IEvent {
  id: string;
  type: string;
  user_id: string;
  aggregate_id: string;
  created_on: Date;
  data: IEventData;
  version: number;
}

export default IEvent;
