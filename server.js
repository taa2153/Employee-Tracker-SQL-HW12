function promptUser  () {
    inquirer.prompt([
        {
          name: 'task',
          type: 'list',
          message: 'Please select an option:',
          choices: [
            'View All Employees',
            'Add Employee',
            'View All Roles',
            'Update Employee Role',,
            'View All Departments',
            'Add Role',
            'Add Department',
            'End'
            ]
        }
      ])
      .then(function ({ task }) {
        switch (task) {
        case "View All Employees":
            viewAllEmployees();
            break;
        
        case "View All Roles":
            viewAllRoles();
            break;
        
        case "View All Departments":
             viewAllDepartments();
             break;

        case "Update Employee Role":
            updateEmployeeRole();
            break;
      
        case "Add Employee":
            addEmployee();
            break;
        case "Add Department":
            addDepartment();
            break;
  
        case "Add Role":
            addRole();
            break;
  
        case "end":
            connection.end();
            break;
        }
      });
  }