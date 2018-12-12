import IMetadata from "./IMetadata";

export default class OrderMetadata implements IMetadata {
  fundamentals: Fundamentals;
  quote: Quote;
}

class Fundamentals {
  open: string;
  high: string;
  low: string;
  volume: string;
  average_volume_2_weeks: string;
  average_volume: string;
  high_52_weeks: string;
  dividend_yield: string;
  low_52_weeks: string;
  market_cap: string;
  pe_ratio: string;
  shares_outstanding: string;
}

class Quote {
  ask_price: string;
  ask_size: number;
  bid_price: string;
  bid_size: number;
  last_trade_price: string;
  last_extended_hours_trade_price: string;
  previous_close: string;
  adjusted_previous_close: string;
  previous_close_date: string;
  symbol: string;
  trading_halted: boolean;
  has_traded: boolean;
  last_trade_price_source: string;
  updated_at: string;
}
