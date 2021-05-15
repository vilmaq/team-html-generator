const createManager = require("./createManager");
const createEngineer = require("./createEngineer");
const createIntern = require("./createIntern");
const getAnswers = require("./getAnswers");

const promptQuestionAndGetAnswers = async () => {
  const questions = [
    {
      type: "list",
      message: "Select the role of the new Employee:",
      name: "employeeRole",
      choices: [
        {
          name: "Manager",
          value: "manager",
          short: "Mng",
        },
        {
          name: "Engineer",
          value: "engineer",
          short: "Eng",
        },
        {
          name: "Intern",
          value: "intern",
          short: "Int",
        },
        {
          name: "Exit",
          value: "exit",
          short: "Exit",
        },
      ],
    },
  ];

  const answers = await getAnswers(questions);
  return answers;
};

const team = async () => {
  const teamMembers = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await promptQuestionAndGetAnswers();
    console.log(answers.employeeRole);
    if (answers.employeeRole === "exit") {
      inProgress = false;
    } else {
      if (answers.employeeRole === "manager") {
        const newManager = await createManager();
        teamMembers.push(newManager);
      }
      if (answers.employeeRole === "engineer") {
        const newEngineer = await createEngineer();
        teamMembers.push(newEngineer);
      }

      if (answers.employeeRole === "intern") {
        const newIntern = await createIntern();
        teamMembers.push(newIntern);
      }
    }
  }
  return teamMembers;
};

module.exports = team;
