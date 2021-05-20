const Employee = require("./employee");

class Manager extends Employee {
  constructor({ officeNumber, ...rest }) {
    super(rest);

    this.officeNumber = officeNumber;
    console.log(officeNumber);
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
