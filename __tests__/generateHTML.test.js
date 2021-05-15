const generateHTML = require("../src/utils/generateHTML");

describe("generateHTML", () => {
  test("Should return the expected HTML markup", () => {
    const actual = generateHTML({ teamName: "The Team" });
    expect(actual).toMatchSnapshot();
  });
});
