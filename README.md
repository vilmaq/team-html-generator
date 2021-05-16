# Team-HTML-Generator

## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that renders card for each added employee.
Technologies used: JS, Node JS, HTML, CSS.

The application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes are in the `_tests_` directory.

The first class `Employee` is a parent class with the following properties and methods:

- `name`

- `id`

- `email`

- `getName()`

- `getId()`

- `getEmail()`

- `getRole()`&mdash;returns `'Employee'`

The other three classes (Manager, Engineer, Intern) will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` has also the following:

- `officeNumber`

- `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` has also the following:

- `github`&mdash;GitHub username

- `getGithub()`

- `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` has also the following:

- `school`

- `getSchool()`

- `getRole()`&mdash;overridden to return `'Intern'`
-

In this project the following packages have been used:

- [Inquirer package](https://www.npmjs.com/package/inquirer).

- [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

## Steps to Get Started

```
git clone git@github.com:vilmaq/team-html-generator.git
cd team-html-generator
npm init -y
npm i inquirer
npm i jest --save-dev

```

Add the following in the package.json for an easy start and testing of the application:

```
"scripts": {},
"start": "node src/index.js",
"test": "jest --verbose --coverage",
"test:watch": "jest --verbose --watch",
```

To run the application:

```
npm run start

```

To test the application:

```
npm run test
npm run test:watch
```

## Directory structure

```
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output
src/				// template helper code
   lib/				// classes: Manager, Engineer, Intern
index.js		// runs the application
```

## GitHub & Walkthrough Video

- [GitHub Repository](https://github.com/vilmaq/team-html-generator)
- [Walkthrough Video](https://drive.google.com/file/d/16ZBErS5N9ycsQSxtuU4I8WNk4k6ltAEx/view)

## Sample of Generated HTML

[sample.html](https://github.com/vilmaq/team-html-generator/blob/master/src/utils/sample.html)
