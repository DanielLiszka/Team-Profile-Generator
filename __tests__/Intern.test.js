const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  const name = "Queen Osmond";
  const id = 4113;
  const email = "queenosmond@hotmail.com";
  const school = "George Mason";
  const role = "Intern";
  const testIntern = new Intern(name, id, email, school);

  it("Should return the correct school", () => {
    expect(testIntern.getSchool()).toBe(school);
  });

  it("Should return the Intern name", () => {
    expect(testIntern.getName()).toBe(name);
  });

  it("Should return the Intern id", () => {
    expect(testIntern.getId()).toBe(id);
  });

  it("Should return the Intern email", () => {
    expect(testIntern.getEmail()).toBe(email);
  });

  it("Should return the Intern role", () => {
    expect(testIntern.getRole()).toBe(role);
  });
});