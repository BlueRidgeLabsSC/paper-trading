import IData from "../Data/IData";

export default interface IEventData {
  aggregate_id: string;
  version: number;
  data: IData;
}
