const Manager = require("../templates/Manager.js");

//Run tests for the Manager class
describe("Manager", () => {
  const name = "Rosaline Charlotte";
  const id = 923;
  const email = "rosalinecharlotte@yahoo.com";
  const officeNumber = "office#56";
  const role = "Manager";
  const testManager = new Manager(name, id, email, officeNumber);

  it("Should return correct office number", () => {
    expect(testManager.officeNumber).toBe(officeNumber);
  });

  it("Should return the Manager name", () => {
    expect(testManager.name).toBe(name);
  });

  it("Should return the Manager id", () => {
    expect(testManager.id).toBe(id);
  });

  it("Should return the Manager email", () => {
    expect(testManager.email).toBe(email);
  });

  it("Should return the Manager role", () => {
    expect(testManager.role).toBe(role);
  });
  it("Can set office number", () => {
	  const test_value = "office#99";
	  const test_object = new Manager(name,id,email,test_value,role);
	  expect(test_object.officeNumber).toBe(test_value);
  });
  it("Can set email", () => {
	  const test_value = "rosalinecharlotte@gmail.com";
	  const test_object = new Manager(name,id,test_value,officeNumber,role);
	  expect(test_object.email).toBe(test_value);
  });
  it("Can set ID", () => {
    const test_value = 459;
    const test_object = new Manager(name,test_value,email,officeNumber,role);
    expect(test_object.id).toBe(test_value);
    });
    it("Can set Name", () => {
        const test_value = "James Madison";
        const test_object = new Manager(test_value,id,email,officeNumber,role);
        expect(test_object.name).toBe(test_value);
    });
});