import IData from "../IData";

export default class OrderData implements IData {
  price: number;
  quantity: number;
  type: string;
  cumulative_quantity: number;
  average_price: number;
  fees: number;
  symbol: string;
}
