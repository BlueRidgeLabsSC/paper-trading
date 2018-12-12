import OrderEventDataBase from "./OrderEventDataBase";

class OrderCanceled extends OrderEventDataBase {
  state = "canceled";
}

export default OrderCanceled;
