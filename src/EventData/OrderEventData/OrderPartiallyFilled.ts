import OrderEventDataBase from "./OrderEventDataBase";

export default class OrderPartiallyFilled extends OrderEventDataBase {
  state = "partially_filled";
}
