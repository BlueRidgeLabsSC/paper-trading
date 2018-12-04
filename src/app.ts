import robinhood, { InitCallback } from "robinhood";
import request = require("request");

class PaperTrading implements robinhood.RobinhoodWebApi {
  robinhoodAPI: robinhood.RobinhoodWebApi;

  constructor(username: string, password: string, callback: InitCallback) {
    this.robinhoodAPI = robinhood(
      {
        username,
        password
      },
      callback
    );
  }

  expire_token(callback: request.RequestCallback): void {
    this.robinhoodAPI.expire_token(callback);
  }

  auth_token(): string {
    return this.robinhoodAPI.auth_token();
  }

  investment_profile(callback: request.RequestCallback): void {
    // todo: figure out what this is
    this.robinhoodAPI.investment_profile(callback);
  }

  instruments(callback: request.RequestCallback): void;
  instruments(symbol: string, callback: request.RequestCallback): void;
  instruments(symbol: any, callback?: any) {
    this.robinhoodAPI.instruments(symbol, callback);
  }

  fundamentals(symbol: string, callback: request.RequestCallback): void {
    this.robinhoodAPI.fundamentals(symbol, callback);
  }

  popularity(symbol: string, callback: request.RequestCallback): void {
    this.robinhoodAPI.popularity(symbol, callback);
  }

  accounts(callback: request.RequestCallback): void {
    // todo: figure out what this is
    this.robinhoodAPI.accounts(callback);
  }

  quote_data(symbol: string, callback: request.RequestCallback): void;
  quote_data(symbol: string[], callback: request.RequestCallback): void;
  quote_data(symbol: any, callback: any) {
    this.robinhoodAPI.quote_data(symbol, callback);
  }

  orders(
    options: robinhood.Options.OrdersOptions,
    callback: request.RequestCallback
  ): void;
  orders(orderId: string, callback: request.RequestCallback): void;
  orders(orderId: any, callback: any) {
    // todo: return paper orders
    throw new Error("Method not implemented.");
  }

  positions(callback: request.RequestCallback): void {
    // todo: return paper positions
    throw new Error("Method not implemented.");
  }

  nonzero_positions(callback: request.RequestCallback): void {
    // todo: return paper non zero positions
    throw new Error("Method not implemented.");
  }

  place_buy_order(
    options: robinhood.Options.BuySellOptions,
    callback: request.RequestCallback
  ): void {
    // todo: place_buy_order
    throw new Error("Method not implemented.");
  }

  place_sell_order(
    options: robinhood.Options.BuySellOptions,
    callback: request.RequestCallback
  ): void {
    // todo: place_sell_order
    throw new Error("Method not implemented.");
  }

  cancel_order(order: object, callback: request.RequestCallback): void;
  cancel_order(orderId: string, callback: request.RequestCallback): void;
  cancel_order(orderId: any, callback: any) {
    // todo: cancel_order
    throw new Error("Method not implemented.");
  }

  historicals(
    symbol: string,
    intv: robinhood.IntervalTypes,
    span: robinhood.SpanTypes,
    callback: request.RequestCallback
  ): void {
    this.robinhoodAPI.historicals(symbol, intv, span, callback);
  }

  user(callback: request.RequestCallback): void {
    this.robinhoodAPI.user(callback);
  }

  watchlists(callback: request.RequestCallback): void {
    this.robinhoodAPI.watchlists(callback);
  }

  earnings(
    options:
      | robinhood.Options.EarningsOptionsWithInstrument
      | robinhood.Options.EarningsOptionsWithSymbol,
    callback: request.RequestCallback
  ): void {
    this.robinhoodAPI.earnings(options, callback);
  }

  dividends(callback: request.RequestCallback): void {
    this.robinhoodAPI.dividends(callback);
  }

  splits(instrument: string, callback: request.RequestCallback): void {
    this.robinhoodAPI.splits(instrument, callback);
  }

  news(symbol: string, callback: request.RequestCallback): void {
    this.robinhoodAPI.news(symbol, callback);
  }

  tag(tag: robinhood.TagTypes, callback: request.RequestCallback): void {
    this.robinhoodAPI.tag(tag, callback);
  }

  url(url: string, callback: request.RequestCallback): void {
    this.robinhoodAPI.url(url, callback);
  }

  sp500_down(callback: request.RequestCallback): void {
    this.robinhoodAPI.sp500_down(callback);
  }

  sp500_up(callback: request.RequestCallback): void {
    this.robinhoodAPI.sp500_up(callback);
  }
}

export default PaperTrading;
