const Engineer = require("../src/lib/engineer");
const newEngineer = new Engineer("Test", "47", "vilma@test.com", "vilmaq");

describe("Engineer's details", () => {
  it("should return the inputted name", () => {
    const expected = "Test";
    const actual = newEngineer.name;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {
    const expected = "47";
    const actual = newEngineer.id;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted email", () => {
    const expected = "vilma@test.com";
    const actual = newEngineer.email;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted github link", () => {
    const expected = "vilmaq";
    const actual = newEngineer.github;
    expect(actual).toEqual(expected);
  });
  it("should return the role", () => {
    const expected = "Engineer";
    const actual = newEngineer.getRole();
    expect(actual).toEqual(expected);
  });
});
