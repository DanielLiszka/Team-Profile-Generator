const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../src");

const render = employees => {
  const html = [];

  html.push(
    employees.filter(employee => employee.role === "Manager").map(manager => renderManager(manager))
  );
  html.push(
    employees.filter(employee => employee.role === "Engineer").map(engineer => renderEngineer(engineer))
  );
  html.push(
    employees.filter(employee => employee.role === "Intern").map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderEngineer = engineer => {
  try{
  var html_src = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"), "utf8");
  } catch (err) {
    if (err) throw err;
  }
  html_src = replacePlaceholders(html_src, "name", engineer.name);
  html_src = replacePlaceholders(html_src, "role", engineer.role);
  html_src = replacePlaceholders(html_src, "email", engineer.email);
  html_src = replacePlaceholders(html_src, "id", engineer.id);
  html_src = replacePlaceholders(html_src, "github", engineer.getGithub());
  return html_src;
};

const renderManager = manager => {
  try{
  var html_src = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"), "utf8");
  } catch (err) {
    if (err) throw err;
  }
  html_src = replacePlaceholders(html_src, "name", manager.name);
  html_src = replacePlaceholders(html_src, "role", manager.role);
  html_src = replacePlaceholders(html_src, "email", manager.email);
  html_src = replacePlaceholders(html_src, "id", manager.id);
  html_src = replacePlaceholders(html_src, "officeNumber", manager.officeNumber);
  return html_src;
};

const renderIntern = intern => {
  try{
  var html_src = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"), "utf8");
  } catch (err) {
    if (err) throw err;
  }
  html_src = replacePlaceholders(html_src, "name", intern.name);
  html_src = replacePlaceholders(html_src, "role", intern.role);
  html_src = replacePlaceholders(html_src, "email", intern.email);
  html_src = replacePlaceholders(html_src, "id", intern.id);
  html_src = replacePlaceholders(html_src, "school", intern.school);
  return html_src;
};

const replacePlaceholders = (html_src, placeholder, value) => {
  const pattern = new RegExp("{{{ " + placeholder + " }}}", "gm");
  return html_src.replace(pattern, value);
};

const renderMain = html => {
  try{
  var html_src = fs.readFileSync(path.resolve(templatesDir, "employee.html"), "utf8");
  } catch (err) {
    if (err) throw err;
  }
  return replacePlaceholders(html_src, "team", html);
};

module.exports = render;