import { v4 as uuid } from "uuid";
import OrderEventDataBase from "./OrderEventDataBase";
import IData from "../IData";

class SellOrderPlaced extends OrderEventDataBase {
  side = "sell";
  state = "placed";

  constructor(order: IData) {
    super(uuid(), 0, order);
  }
}

export default SellOrderPlaced;
