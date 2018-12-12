import OrderEventDataBase from "./OrderEventDataBase";

class OrderQueued extends OrderEventDataBase {
  state = "queued";
}

export default OrderQueued;
