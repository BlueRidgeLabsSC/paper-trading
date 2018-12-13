import OrderEventDataBase from "./OrderEventDataBase";

export default class OrderQueued extends OrderEventDataBase {
  state = "queued";
}
