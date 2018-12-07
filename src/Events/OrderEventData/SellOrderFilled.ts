import OrderEventDataBase from "./OrderEventDataBase";

class SellOrderFilled extends OrderEventDataBase {
  side = "sell";
  state = "filled";
}

export default SellOrderFilled;
