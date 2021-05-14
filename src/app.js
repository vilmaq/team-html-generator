const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const writeToFile = require("./writeToFile");
// const getAnswers = require("./getAnswers");

const app = async () => {
  console.log("App Started");

  const questions = [
    {
      type: "input",
      message: "What is the name of the Team?",
      name: "teamName",
    },
  ];

  const answers = await inquirer.prompt(questions);
  const html = generateHTML(answers);

  writeToFile(html);
};

module.exports = app;
