import { v4 as uuid } from "uuid";
import OrderEventDataBase from "./OrderEventDataBase";
import IData from "../IData";

class BuyOrderPlaced extends OrderEventDataBase {
  side = "buy";
  state = "placed";

  constructor(order: IData) {
    super(uuid(), 0, order);
  }
}

export default BuyOrderPlaced;
