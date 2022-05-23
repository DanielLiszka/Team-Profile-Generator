const Employee = require("../lib/Employee.js");

describe("Getters", () => {
  const name = "Livia Iggy";
  const id = 23;
  const email = "liviaiggy@gmail.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("Should return the Employee name", () => {
    expect(testEmployee.getName()).toBe(name);
  });

  it("Should return the Employee id", () => {
    expect(testEmployee.getId()).toBe(id);
  });

  it("Should return the Employee email", () => {
    expect(testEmployee.getEmail()).toBe(email);
  });

  it("Should return the Employee role", () => {
    expect(testEmployee.getRole()).toBe(role);
  });
});