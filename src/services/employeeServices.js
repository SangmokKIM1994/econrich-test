const employeeRepository = require("../repositories/employeeRepositories");
const { makeError } = require("../error");

class EmployeeService {
  EmployeeRepository = new employeeRepository();

  findCurrentInformation = async ({ employeeid }) => {
    if (typeof employeeid == Number && employeeid.length == 3) {
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
    if (typeof employeeid == Number && employeeid.length == 3) {
      const employeeInformation =
        await this.EmployeeRepository.findHistoryInformation({
          employeeid,
        });
      return {
        currentInformation: employeeInformation.currentInformation,
        historyInformation: employeeInformation.historyInformation,
      };
    } else {
      throw new makeError({
        message: "잘못된 직원 번호 입니다.",
        code: 404,
      });
    }
  };
}

module.exports = EmployeeService;
