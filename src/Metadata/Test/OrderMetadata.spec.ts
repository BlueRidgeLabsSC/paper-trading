import OrderMetadata from "../OrderMetadata";

describe("test event initialization", () => {
  const data = new OrderMetadata();

  data.fundamentals = JSON.parse(
    '{"open":"180.920000","high":"182.389900","low":"176.270000","volume":"15204403.000000","average_volume_2_weeks":"41885606.111100","average_volume":"32430680.191200","high_52_weeks":"233.470000","dividend_yield":"1.204900","low_52_weeks":"150.240000","market_cap":"878816512500.000000","pe_ratio":"14.887110","shares_outstanding":"4754986000.000000"}'
  );

  data.quote = JSON.parse(
    '{"ask_price":"176.720000","ask_size":200,"bid_price":"176.560000","bid_size":200,"last_trade_price":"176.690000","last_extended_hours_trade_price":"176.500000","previous_close":"184.820000","adjusted_previous_close":"184.820000","previous_close_date":"2018-12-03","symbol":"AAPL","trading_halted":false,"has_traded":true,"last_trade_price_source":"consolidated","updated_at":"2018-12-05T00:59:41Z"}'
  );

  test("expect object to match snapshot", () => {
    expect(data).toMatchSnapshot();
  });
});
