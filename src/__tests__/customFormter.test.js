import moment from "moment";
import { formatDate, formatNumberToNaira } from "../Utils/customFormter";

describe("formatDate", () => {
  it("formats a valid moment date", () => {
    const date = moment("2023-08-21");
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("08/21/2023");
  });

  it("returns an empty string for null date", () => {
    const formattedDate = formatDate(null);
    expect(formattedDate).toBe("");
  });
});

describe("formatNumberToNaira", () => {
  it("formats a number to NGN currency", () => {
    const number = 1000000;
    const formattedNumber = formatNumberToNaira(number);
    expect(formattedNumber).toBe("₦1,000,000.00");
  });

  it("formats a string number to NGN currency", () => {
    const number = "500000";
    const formattedNumber = formatNumberToNaira(number);
    expect(formattedNumber).toBe("₦500,000.00");
  });

  it("formats a floating-point number to NGN currency", () => {
    const number = 12345.6789;
    const formattedNumber = formatNumberToNaira(number);
    expect(formattedNumber).toBe("₦12,345.68");
  });

  it("handles zero correctly", () => {
    const number = 0;
    const formattedNumber = formatNumberToNaira(number);
    expect(formattedNumber).toBe("₦0.00");
  });

  it("handles negative numbers correctly", () => {
    const number = -50000;
    const formattedNumber = formatNumberToNaira(number);
    expect(formattedNumber).toBe("-₦50,000.00");
  });
});
