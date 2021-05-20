const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const generateManagerCard = (employee) => {
  console.log(employee);
  return `  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <div class="card-header bg-success text-white">Manager</div>
      <div class="card-body">
        <h5 class="card-title">Name:${employee.name}</h5>
        <p class="card-text">ID:${employee.id}</p>
        <p class="card-text"><a  href="mailto: ${employee.email}"> ${employee.email} </a> </p>
        <p class="card-text"> Office Number:${employee.officeNumber}</p>
    
        
      </div>
    </div>
  </div>`;
};

const generateEngineerCard = (employee) => {
  return `      <div class="col">
  <div class="card">
    <div class="card-header bg-secondary text-white">Engineer</div>
    <div class="card-body">
      <h5 class="card-title">Name:${employee.name}</h5>
      <p class="card-text">ID: ${employee.id}</p>
      <p class="card-text"><a  href="mailto: ${employee.email}"> ${employee.email} </a></p>
      <p class="card-text"> <a href="https://www.github.com/${employee.github}" target="_blank"
      >${employee.github}</a></p>
    </div>
  </div>
</div>`;
};

const generateInternCard = (employee) => {
  return `      <div class="col">
  <div class="card">
    <div class="card-header text-white bg-warning">Intern</div>
    <div class="card-body">
      <h5 class="card-title">Name:${employee.name}</h5>
      <p class="card-text">ID: ${employee.id}</p>
      <p class="card-text"><a  href="mailto: ${employee.email}"> ${employee.email} </a></p>
      <p class="card-text">School: ${employee.school}</p>
    </div>
  </div>
</div>
  </div>`;
};

const generateHTML = (teamMembers, manager, answers) => {
  const managerCard = generateManagerCard(manager);

  const generateCard = (employee) => {
    if (employee.getRole() === "Engineer") {
      return generateEngineerCard(employee);
    }
    if (employee.getRole() === "Intern") {
      return generateInternCard(employee);
    }
  };

  const cards = teamMembers.map(generateCard);
  console.log("employees.html generated inside dist directory");
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />
  
      <title>Team</title>
    </head>
    <body>
      <div
        <header text-white class="text-center p-4 bg-info ">
          <h1>${answers.teamName}</h1>
        </header>
        </div>
        <div class="row d-flex justify-content-between flex-wrap">
        ${managerCard}
        ${cards.join("")}
      </div>
    </div>
  </body>
</html>
  `;
};

module.exports = generateHTML;
