import EventDataBase from "../EventDataBase";
import OrderData from "../../Data/OrderData";
import OrderMetadata from "../../Metadata/OrderMetadata";
import IData from "../../Data/IData";

export default abstract class OrderEventDataBase extends EventDataBase {
  data: OrderData;
  metadata?: OrderMetadata;
  abstract state: string;

  constructor(aggregate_id: string, version: number, data: IData) {
    super(aggregate_id, version, data);
  }
}
