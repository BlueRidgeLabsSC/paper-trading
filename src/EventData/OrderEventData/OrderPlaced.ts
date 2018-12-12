import OrderEventDataBase from "./OrderEventDataBase";
import IData from "../../Data/IData";

class OrderPlaced extends OrderEventDataBase {
  state = "placed";
  side: string;

  constructor(
    side: string,
    aggregate_id: string,
    version: number,
    data: IData
  ) {
    super(aggregate_id, version, data);
    this.side = side;
  }
}

export default OrderPlaced;
