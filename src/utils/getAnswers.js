const inquirer = require("inquirer");

const getAnswers = async (questions) => inquirer.prompt(questions);

module.exports = getAnswers;
