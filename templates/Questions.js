const ConfirmAnswer = async (input) => {
  if (input == null || input == ""){
    return console.log("Please Enter Valid Input")
  }
  return true;
}

module.exports = {
  engineer_questions: [
    {
      type: "input",
      name: "engineer_name",
      message: "What is the engineer's name?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "engineer_id",
      message: "What is the engineer's id?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "engineer_email",
      message: "What is the engineer's email?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "engineer_github",
      message: "What is the engineer's github username?",
      validate: ConfirmAnswer
    },
  ],
  
  manager_questions: [
    {
      type: "input",
      name: "manager_name",
      message: "What is the manager's name?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is the manager's id?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "manager_email",
      message: "What is the manager's email?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "manager_officeNo",
      message: "What is the manager's office number?",
      validate: ConfirmAnswer
    },
  ],
  
  intern_questions: [
    {
      type: "input",
      name: "intern_name",
      message: "What is the intern's name?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "intern_id",
      message: "What is the intern's id?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "intern_email",
      message: "What is the intern's email?",
      validate: ConfirmAnswer
    },
    {
      type: "input",
      name: "intern_school",
      message: "What is the intern's school?",
      validate: ConfirmAnswer
    },
  ],
};
