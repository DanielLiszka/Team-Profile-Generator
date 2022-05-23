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



  
});