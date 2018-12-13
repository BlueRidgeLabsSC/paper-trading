import OrderEventDataBase from "./OrderEventDataBase";

export default class OrderCanceled extends OrderEventDataBase {
  state = "canceled";
}
