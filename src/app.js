const getAnswers = require("./utils/getAnswers");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./utils/writeToFile");
const team = require("./utils/team");
const createManager = require("./utils/createManager");

const app = async () => {
  console.log("App Started");

  const questions = [
    {
      type: "input",
      message: "What is the name of the Team?",
      name: "teamName",
    },
  ];

  const answers = await getAnswers(questions);

  const manager = await createManager();

  const teamMembers = await team();

  const html = generateHTML(answers);

  writeToFile(html);
};

module.exports = app;
