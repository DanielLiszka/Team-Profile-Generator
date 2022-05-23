const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  const name = "Ricky Lesia";
  const id = 3412;
  const email = "rickylesia@yahoo.com";
  const gitHubUsername = "rockridgeDev";
  const role = "Engineer";
  const returnedGitHub = `<a href="https://github.com/${gitHubUsername}">https://github.com/${gitHubUsername}</a>`;

  const testEngineer = new Engineer(name, id, email, gitHubUsername);

  it("Should return github linked account", () => {
    expect(testEngineer.getGithub()).toBe(returnedGitHub);
  });

  it("Should return the Engineer name", () => {
    expect(testEngineer.getName()).toBe(name);
  });

  it("Should return the Engineer id", () => {
    expect(testEngineer.getId()).toBe(id);
  });

  it("Should return the Engineer email", () => {
    expect(testEngineer.getEmail()).toBe(email);
  });

  it("Should return the Engineer role", () => {
    expect(testEngineer.getRole()).toBe(role);
  });
  it("Can set Name", () => {
    const test_value = "Connor Anderson";
    const test_object = new Engineer(test_value,id,email,gitHubUsername,role);
    expect(test_object.name).toBe(test_value);
    });
    it("Can set id", () => {
        const test_value = 391;
        const test_object = new Engineer(name,test_value,email,gitHubUsername,role);
        expect(test_object.id).toBe(test_value);
    });
    it("Can set email", () => {
        const test_value = "rickylesia@gmail.com";
        const test_object = new Engineer(name,id,test_value,gitHubUsername,role);
        expect(test_object.email).toBe(test_value);
    });
    it("Can set Github Username", () => {
        const test_value = "RickyMan";
        const test_object = new Engineer(name,id,email,test_value,role);
        expect(test_object.username).toBe(test_value);
    });
    it("Can set role", () => {
        const test_value = "Junior Engineer";
        const test_object = new Engineer(name,id,email,gitHubUsername,test_value);
        expect(test_object.role).toBe(test_value);
    });
});