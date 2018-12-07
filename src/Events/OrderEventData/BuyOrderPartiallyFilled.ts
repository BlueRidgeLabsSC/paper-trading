import OrderEventDataBase from "./OrderEventDataBase";

class BuyOrderPartiallyFilled extends OrderEventDataBase {
  side = "buy";
  state = "partially_filled";
}

export default BuyOrderPartiallyFilled;
