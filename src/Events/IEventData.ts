import IData from "./IData";

export default interface IEventData {
  aggregate_id: string;
  version: number;
  data: IData;
}
