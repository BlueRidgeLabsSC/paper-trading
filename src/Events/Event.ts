import { v4 as uuid } from "uuid";
import IEvent from "./IEvent";
import IEventData from "./EventData/IEventData";
import IMetadata from "./EventData/IMetadata";

class Event implements IEvent {
  id: string;
  type: string;
  user_id: string;
  aggregate_id: string;
  created_on: Date;
  data: IEventData;
  metadata?: IMetadata;
  version: number;

  constructor(
    user_id: string,
    data: IEventData,
    metadata?: IMetadata,
    id: string = uuid()
  ) {
    this.id = id;
    this.type = data.constructor.name;
    this.user_id = user_id;
    this.aggregate_id = data.aggregate_id;
    this.created_on = new Date();
    this.data = data;
    this.metadata = metadata;
    this.version = data.version;
  }
}

export default Event;
