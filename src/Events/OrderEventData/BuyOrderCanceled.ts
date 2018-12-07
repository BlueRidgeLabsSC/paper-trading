import OrderEventDataBase from "./OrderEventDataBase";

class BuyOrderCanceled extends OrderEventDataBase {
  side = "buy";
  state = "canceled";
}

export default BuyOrderCanceled;
