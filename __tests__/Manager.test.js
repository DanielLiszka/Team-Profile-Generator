const Manager = require("../lib/Manager.js");

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
    expect(testManager.getName()).toBe(name);
  });

  it("Should return the Manager id", () => {
    expect(testManager.getId()).toBe(id);
  });

  it("Should return the Manager email", () => {
    expect(testManager.getEmail()).toBe(email);
  });

  it("Should return the Manager role", () => {
    expect(testManager.getRole()).toBe(role);
  });
});