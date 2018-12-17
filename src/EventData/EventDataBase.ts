import IEventData from "./IEventData";
import IData from "../Data/IData";

abstract class EventDataBase implements IEventData {
  aggregate_id: string;
  version: number;
  data: IData;

  constructor(aggregate_id: string, version: number, data?: IData) {
    this.aggregate_id = aggregate_id;
    this.version = version;
    this.data = data;
  }
}

export default EventDataBase;
