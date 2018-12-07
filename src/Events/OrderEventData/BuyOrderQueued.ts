import OrderEventDataBase from "./OrderEventDataBase";

class BuyOrderQueued extends OrderEventDataBase {
  side = "buy";
  state = "queued";
}

export default BuyOrderQueued;
