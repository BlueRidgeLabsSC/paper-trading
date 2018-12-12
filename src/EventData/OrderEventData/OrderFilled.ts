import OrderEventDataBase from "./OrderEventDataBase";

class OrderFilled extends OrderEventDataBase {
  state = "filled";
}

export default OrderFilled;
