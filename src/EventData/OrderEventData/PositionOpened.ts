import EventDataBase from "../EventDataBase";

export default class PositionOpened extends EventDataBase {
  value: number;
  quantity: number;
  symbol: string;

  constructor(
    value: number,
    quantity: number,
    symbol: string,
    aggregate_id: string,
    version: number
  ) {
    super(aggregate_id, version);
    this.value = value;
    this.quantity = quantity;
    this.symbol = symbol;
  }
}
