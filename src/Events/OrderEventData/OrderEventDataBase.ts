import EventDataBase from "../EventDataBase";
import OrderData from "./OrderData";
import OrderMetadata from "./OrderMetadata";

export default abstract class OrderEventDataBase extends EventDataBase {
  data: OrderData;
  metadata?: OrderMetadata;
  abstract side: string;
  abstract state: string;
}
