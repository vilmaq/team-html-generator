const getAnswers = require("./getAnswers");
const Engineer = require("../lib/Engineer");

const createEngineer = async () => {
  const engineerQuestions = [
    {
      message: "Please enter the new Engineer's full name:",
      name: "name",
    },
    {
      message: "Please enter the new Engineer's ID",
      name: "id",
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

  const engineerAnswers = await getAnswers(engineerQuestions);

  return new Engineer(engineerAnswers);
};

module.exports = createEngineer;
