import OrderEventDataBase from "./OrderEventDataBase";

class OrderPlaced extends OrderEventDataBase {
  state = "placed";
}

export default OrderPlaced;
