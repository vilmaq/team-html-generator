const app = require("./app");

describe("app", () => {
  test("should console log App Started", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const expected = "App Started";

    //call the app you want to test
    app();

    expect(consoleSpy).toHaveBeenCalledWith(expected);

    //assert
  });
});
