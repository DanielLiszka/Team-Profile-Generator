const Manager = require("./templates/manager");
const Engineer = require("./templates/engineer");
const Intern = require("./templates/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./templates/questions");

const render = require("./templates/htmlRenderer");
const OUTPUT_DIR = path.resolve(__dirname, "generated_html");
const outputPath = path.join(OUTPUT_DIR, "team_info.html");

let team = [];


function buildManager() {
  inquirer.prompt(questions.manager_questions).then(function (answers) {
    const manager = new Manager(
      answers.manager_name,
      answers.manager_id,
      answers.manager_email,
      answers.manager_officeNo
    );
    team.push(manager);

    buildTeam();
  });
}

async function buildTeam() {
  console.log("Please Enter Your Team Members' Information");
  while (true) {
    await inquirer
      .prompt([
        {
          type: "list",
          name: "team_member",
          message: "What type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "Exit Program",
          ],
        },
      ])
      .then(async function (response) {
      if (response.team_member === "Engineer") {
          await inquirer
            .prompt(questions.engineer_questions)
            .then(function (engineerData) {
              const engineer = new Engineer(
                engineerData.engineer_name,
                engineerData.engineer_id,
                engineerData.engineer_email,
                engineerData.engineer_github
              );

              team.push(engineer);
            });
        } else if (response.team_member === "Intern") {
            await inquirer.prompt(questions.intern_questions).then(function (internData) {
          
              const intern = new Intern(
                internData.intern_name,
                internData.intern_id,
                internData.intern_email,
                internData.intern_school
              );

              team.push(intern);
            
            });
        } else if (
          response.team_member === "Exit Program"
        ) {
          const htmlData = render(team);

          writeToFile(htmlData);

          process.exit(0);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}


// Write to File
function writeToFile(htmlData) {
  fs.writeFileSync(outputPath, htmlData, "utf8");

  console.log("Output File created");
}

buildManager();