# Team html Generator code

### Steps

create gitignore
npm init -y to get the package.json
npm i inquirer
npm i jest --save-dev - install jest as a dev dependency
src directory

Add the following in the package.json
"scripts": {},
"start": "node src/index.js",
"test": "jest --verbose --coverage",
"test:watch": "jest --verbose --watch",

snapshot - will take the snapshot of what the function has return and wil compare it
