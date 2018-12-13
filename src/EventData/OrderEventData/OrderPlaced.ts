import OrderEventDataBase from "./OrderEventDataBase";

export default class OrderPlaced extends OrderEventDataBase {
  state = "placed";
}
