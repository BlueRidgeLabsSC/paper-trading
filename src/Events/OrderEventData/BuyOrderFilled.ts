import OrderEventDataBase from "./OrderEventDataBase";

class BuyOrderFilled extends OrderEventDataBase {
  side = "buy";
  state = "filled";
}

export default BuyOrderFilled;
