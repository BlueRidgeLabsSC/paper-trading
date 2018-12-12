import OrderEventDataBase from "./OrderEventDataBase";

class OrderPartiallyFilled extends OrderEventDataBase {
  state = "partially_filled";
}

export default OrderPartiallyFilled;
