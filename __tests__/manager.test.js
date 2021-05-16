const Manager = require("../src/lib/manager");
const newManager = new Manager("Test", "47", "vilma@test.com", "0123456789");

describe("Manager's details", () => {
  it("should return the name", () => {
    const expected = "Test";
    const actual = newManager.name;
    expect(actual).toEqual(expected);
  });
  it("should return the Manager's id", () => {
    const expected = "47";
    const actual = newManager.id;
    expect(actual).toEqual(expected);
  });
  it("should return the Manager's  email", () => {
    const expected = "vilma@test.com";
    const actual = newManager.email;
    expect(actual).toEqual(expected);
  });
  it("should return the Manager's  github link", () => {
    const expected = "0123456789";
    const actual = newManager.officeNumber;
    expect(actual).toEqual(expected);
  });
  it("should return the Manager's role", () => {
    const expected = "Manager";
    const actual = newManager.getRole();
    expect(actual).toEqual(expected);
  });
});
