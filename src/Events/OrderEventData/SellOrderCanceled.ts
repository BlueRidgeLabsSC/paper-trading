import OrderEventDataBase from "./OrderEventDataBase";

class SellOrderCanceled extends OrderEventDataBase {
  side = "sell";
  state = "canceled";
}

export default SellOrderCanceled;
