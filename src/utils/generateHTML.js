const generateHTML = (answers) => {
  console.log(answers);

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
        <header class="text-center p-4 bg-info text-white">
          <h1>${answers.teamName}</h1>
        </header>
      </div>
    </body>
  </html>
  `;
};

module.exports = generateHTML;
