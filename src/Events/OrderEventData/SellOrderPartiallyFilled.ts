import OrderEventDataBase from "./OrderEventDataBase";

class SellOrderPartiallyFilled extends OrderEventDataBase {
  side = "sell";
  state = "partially_filled";
}

export default SellOrderPartiallyFilled;
