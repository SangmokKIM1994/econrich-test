const employeeRepository = require("../repositories/employeeRepositories");

class EmployeeService {
  EmployeeRepository = new employeeRepository();

  findCurrentInformation = async ({ employeeid }) => {
    const currentInformation =
      await this.EmployeeRepository.findCurrentInformation({ employeeid });
    return currentInformation;
  };
}

module.exports = EmployeeService;
