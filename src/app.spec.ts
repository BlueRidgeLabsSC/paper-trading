import PaperTrading from "./app";
import dotenv from "dotenv";

dotenv.config();

describe("testing PaperTrading class", () => {
  test("should call the callback function upon ", () => {
    new PaperTrading(process.env.USERNAME, process.env.PASSWORD, () => {
      expect.assertions(1);
    });
  });
});
