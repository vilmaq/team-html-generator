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

  const { name, id, email, githubUsername } = await getAnswers(
    engineerQuestions
  );

  return new Engineer(name, id, email, githubUsername);
};

module.exports = createEngineer;
