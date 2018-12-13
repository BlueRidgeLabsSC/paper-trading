import OrderEventDataBase from "./OrderEventDataBase";

export default class OrderFilled extends OrderEventDataBase {
  state = "filled";
}
