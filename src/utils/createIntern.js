const getAnswers = require("./getAnswers");
const Intern = require("../lib/Intern");

const createIntern = async () => {
  const internQuestions = [
    {
      message: "Please enter the new Intern's full name:",
      name: "name",
    },
    {
      message: "Please enter the new Intern's ID",
      name: "id",
    },
    {
      message: "Please enter the new Intern's email",
      name: "email",
    },
    {
      message: "Please enter the new Intern's school ",
      name: "school",
    },
  ];

  const internAnswers = await getAnswers(internQuestions);

  return new Intern(internAnswers);
};

module.exports = createIntern;
