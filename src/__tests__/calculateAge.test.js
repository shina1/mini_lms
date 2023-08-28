import { calculateAge } from "../Utils/calculateAge";

describe("calculateAge", () => {
  it("calculates age correctly for a person born a year ago", () => {
    const dateOfBirth = "2022-08-21";
    const expectedAge = 1;

    const age = calculateAge(dateOfBirth);

    expect(age).toBe(expectedAge);
  });

  it("calculates age correctly for a person born 25 years ago", () => {
    const dateOfBirth = "1998-08-21";
    const expectedAge = 25;

    const age = calculateAge(dateOfBirth);

    expect(age).toBe(expectedAge);
  });

  it("calculates age correctly for a person born today", () => {
    const today = new Date();
    const dateOfBirth = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const expectedAge = 0;

    const age = calculateAge(dateOfBirth);

    expect(age).toBe(expectedAge);
  });

  it("calculates age correctly for a person born a month ago", () => {
    const today = new Date();
    const lastMonthDate = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    const dateOfBirth = `${lastMonthDate.getFullYear()}-${
      lastMonthDate.getMonth() + 1
    }-${lastMonthDate.getDate()}`;
    const expectedAge = 0;

    const age = calculateAge(dateOfBirth);

    expect(age).toBe(expectedAge);
  });
});
