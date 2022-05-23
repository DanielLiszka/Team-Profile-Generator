const Employee = require("../templates/Employee.js");

//Run tests for the employee class
describe("Employee", () => {
  const name = "Livia Iggy";
  const id = 23;
  const email = "liviaiggy@gmail.com";
  const role = "Employee";

  const testEmployee = new Employee(name, id, email);

  it("Should return the Employee name", () => {
    expect(testEmployee.name).toBe(name);
  });

  it("Should return the Employee id", () => {
    expect(testEmployee.id).toBe(id);
  });

  it("Should return the Employee email", () => {
    expect(testEmployee.email).toBe(email);
  });

  it("Should return the Employee role", () => {
    expect(testEmployee.role).toBe(role);
  });
  
  it("Can create Employee instance", () => {
    const test_object = new Employee();
    expect(typeof(test_object)).toBe("object");
  });
  
  it("Can set name", () => {
    const name = "James Matthews";
    const test_object = new Employee(name);
    expect(test_object.name).toBe(name);
  });
  
  it("Can set id", () => {
    const test_Value = 156;
    const test_object = new Employee(name, test_Value);
    expect(test_object.id).toBe(test_Value);
  });
  
  it("Can set email", () => {
    const test_Value = "test@gmail.com";
    const test_object = new Employee(name,id, test_Value);
    expect(test_object.email).toBe(test_Value);
  });
});