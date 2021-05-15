const inquirer = require("inquirer");

const app = require("../src/app");

const generateHTML = require("../src/utils/generateHTML");
const writeToFile = require("../src/utils/writeToFile");

jest.mock("inquirer");
jest.mock("../src/utils/generateHTML");
jest.mock("../src/utils/writeToFile");

describe("app", () => {
  const inquirerSpy = jest.spyOn(inquirer, "prompt");
  const consoleSpy = jest.spyOn(console, "log");

  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  //clear mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should console log App Started", async () => {
    mockAnswers();

    const expected = "App Started";
    //call the app you want to test
    await app();

    expect(consoleSpy).toHaveBeenCalledWith(expected);

    //assert
  });

  test(" should pass the questions to inquirer prompt", async () => {
    mockAnswers({});
    const expected = [
      {
        type: "input",
        message: "What is the name of the Team?",
        name: "teamName",
      },
    ];

    await app();

    expect(inquirerSpy).toHaveBeenCalledWith(expected);
  });

  test("should call generateHMTL with the answers ", async () => {
    const mockData = {
      teamName: "test",
    };

    mockAnswers(mockData);
    await app();
    expect(generateHTML).toHaveBeenCalledWith(mockData);
  });

  test("should call writeToFile with the html", async () => {
    const mockData = {
      teamName: "Foo Bar",
    };

    const mockHtml = "html string";

    mockAnswers(mockData);
    generateHTML.mockReturnValue(mockHtml);

    await app();

    expect(writeToFile).toHaveBeenCalledWith(mockHtml);
  });
});
