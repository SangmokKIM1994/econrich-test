const employeeRepository = require("../repositories/employeeRepositories");
const { makeError } = require("../error");

class EmployeeService {
  EmployeeRepository = new employeeRepository();

  findCurrentInformation = async ({ employeeid }) => {
    if (100 < employeeid) {
      const currentInformation =
        await this.EmployeeRepository.findCurrentInformation({ employeeid });
      return currentInformation;
    } else {
      throw new makeError({
        message: "잘못된 직원 번호 입니다.",
        code: 404,
      });
    }
  };

  findHistoryInformation = async ({ employeeid }) => {
    if (100 < employeeid) {
      const employeeInformation =
        await this.EmployeeRepository.findHistoryInformation({
          employeeid,
        });
      return employeeInformation
      
    } else {
      throw new makeError({
        message: "잘못된 직원 번호 입니다.",
        code: 404,
      });
    }
  };
}

module.exports = EmployeeService;
