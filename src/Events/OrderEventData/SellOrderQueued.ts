import OrderEventDataBase from "./OrderEventDataBase";

class SellOrderQueued extends OrderEventDataBase {
  side = "sell";
  state = "queued";
}

export default SellOrderQueued;
