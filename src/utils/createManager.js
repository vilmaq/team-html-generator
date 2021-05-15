const getAnswers = require("./getAnswers");
const Manager = require("../lib/Engineer");

const createManager = async () => {
  const managerQuestions = [
    {
      message: "Please enter Manager's full name:",
      name: "name",
    },
    {
      message: "Please enter Manager's ID",
      name: "id",
    },
    {
      message: "Please enter Manager's email",
      name: "email",
    },
    {
      message: "Please enter Manager's Office Number ",
      name: "officeNumber",
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);

  return new Manager(managerAnswers);
};

module.exports = createManager;
