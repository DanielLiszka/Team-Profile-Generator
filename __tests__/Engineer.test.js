const Engineer = require("../templates/Engineer.js");

//Run tests for the Engineer class
describe("Engineer", () => {
  const name = "Ricky Lesia";
  const id = 3412;
  const email = "rickylesia@yahoo.com";
  const github_username = "rockridgeDev";
  const role = "Engineer";
  const Github_return = `<a href="https://github.com/${github_username}" target="_blank">https://github.com/${github_username}</a>`;

  const testEngineer = new Engineer(name, id, email, github_username);

  it("Should return github linked account", () => {
    expect(testEngineer.getGithub()).toBe(Github_return);
  });

  it("Should return the Engineer name", () => {
    expect(testEngineer.name).toBe(name);
  });

  it("Should return the Engineer id", () => {
    expect(testEngineer.id).toBe(id);
  });

  it("Should return the Engineer email", () => {
    expect(testEngineer.email).toBe(email);
  });

  it("Should return the Engineer role", () => {
    expect(testEngineer.role).toBe(role);
  });
  it("Can set Name", () => {
    const test_value = "Connor Anderson";
    const test_object = new Engineer(test_value,id,email,github_username,role);
    expect(test_object.name).toBe(test_value);
    });
    it("Can set id", () => {
        const test_value = 391;
        const test_object = new Engineer(name,test_value,email,github_username,role);
        expect(test_object.id).toBe(test_value);
    });
    it("Can set email", () => {
        const test_value = "rickylesia@gmail.com";
        const test_object = new Engineer(name,id,test_value,github_username,role);
        expect(test_object.email).toBe(test_value);
    });
    it("Can set Github Username", () => {
        const test_value = "RickyMan";
        const test_object = new Engineer(name,id,email,test_value,role);
        expect(test_object.username).toBe(test_value);
    });
});