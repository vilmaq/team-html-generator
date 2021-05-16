const Intern = require("../src/lib/intern");
const newIntern = new Intern("test", "34", "vilma@test.com", "George's School");

describe("Intern's details", () => {
  it("should return the inputted name", () => {
    const expected = "test";
    const actual = newIntern.name;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {
    const expected = "34";
    const actual = newIntern.id;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted email", () => {
    const expected = "vilma@test.com";
    const actual = newIntern.email;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted school", () => {
    const expected = "George's School";
    const actual = newIntern.getSchool();
    expect(actual).toEqual(expected);
  });
  it("should return the role", () => {
    const expected = "Intern";
    const actual = newIntern.getRole();
    expect(actual).toEqual(expected);
  });
});
