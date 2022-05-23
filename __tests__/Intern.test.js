const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  const name = "Queen Osmond";
  const id = 4113;
  const email = "queenosmond@hotmail.com";
  const school = "George Mason";
  const role = "Intern";
  const testIntern = new Intern(name, id, email, school);

  it("Should return the Intern name", () => {
    expect(testIntern.getName()).toBe(name);
  });

  it("Should return the Intern id", () => {
    expect(testIntern.getId()).toBe(id);
  });

  it("Should return the Intern school", () => {
    expect(testIntern.getSchool()).toBe(school);
  });

  it("Should return the Intern email", () => {
    expect(testIntern.getEmail()).toBe(email);
  });

  it("Should return the Intern role", () => {
    expect(testIntern.getRole()).toBe(role);
  });
    it("Can set Name", () => {
        const test_value = "James Matthews";
        const test_object = new Intern(test_value,id,email,school,role);
        expect(test_object.name).toBe(test_value);
        });
    it("Can set id", () => {
        const test_value = 4823;
        const test_object = new Intern(name,test_value,email,school,role);
        expect(test_object.id).toBe(test_value);
    });
    it("Can set email", () => {
        const test_value = "queenosmond@yahoo.com";
        const test_object = new Intern(name,id,test_value,school,role);
        expect(test_object.email).toBe(test_value);
    });
    it("Can set school", () => {
        const test_value = "Virginia Commonwealth University";
        const test_object = new Intern(name,id,email,test_value,role);
        expect(test_object.school).toBe(test_value);
    });
    it("Can set role", () => {
        const test_value = "Junior Developer";
        const test_object = new Intern(name,id,email,school,test_value);
        expect(test_object.role).toBe(test_value);
    });
});