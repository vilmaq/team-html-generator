const inquirer = require("inquirer");

const getAnswers = async (questions) => await inquirer.prompt(questions);

module.exports = getAnswers;
