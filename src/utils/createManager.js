const getAnswers = require("./getAnswers");
const Manager = require("../lib/Engineer");

const createManager = async () => {
  const managerQuestions = [
    {
      message: "Please enter the new Manager's full name:",
      name: "name",
    },
    {
      message: "Please enter the new Managers's ID",
      name: "employeeID",
    },
    {
      message: "Please enter the new Engineer's email",
      name: "email",
    },
    {
      message: "Please enter the new Engineer's GitHub username ",
      name: "githubUsername",
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);

  return new Manager(managerAnswers);
};

module.exports = createManager;
