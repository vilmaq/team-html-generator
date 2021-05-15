const Employee = require("../src/lib/employee");

describe("Employee class", () => {
  const mockAnswers = {
    name: "test",
    id: "123",
    email: "test@test.com",
  };
  describe("Add a new employee tests", () => {
    it("should create a new Employee object", () => {
      const actual = new Employee(mockAnswers);

      expect(actual).toBeInstanceOf(Employee);
    });

    it("should set the values", () => {
      const actual = new Employee(
        mockAnswers.name,
        mockAnswers.id,
        mockAnswers.email
      );
      console.log(actual);

      expect(actual["name"]).toEqual("test");
      expect(actual["id"]).toEqual("123");
      expect(actual["email"]).toEqual("test@test.com");
    });
  });

  describe("Method tests", () => {
    it("should get employee's name", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getName();

      expect(actual).toEqual(employee.name);
    });

    it("should get employee's ID", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getEmployeeID();

      expect(actual).toEqual(employee.id);
    });

    it("should get the employee's email", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getEmail();

      expect(actual).toEqual(employee.email);
    });

    it("should get the employee's role", () => {
      const employee = new Employee(mockAnswers);
      const actual = employee.getRole();

      expect(actual).toEqual("Employee");
    });
  });
});
