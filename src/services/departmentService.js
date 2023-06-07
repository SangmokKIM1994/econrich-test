const departmentRepository = require("../repositories/departmentRepositories");
const { makeError } = require("../error");

class DepartmentService {
  DepartmentRepository = new departmentRepository();

  departmentInfo = async ({ departmentid }) => {
    if (Number(departmentid) >= 10 && Number(departmentid) <= 270) {
      const departmentInfo = await this.DepartmentRepository.departmentInfo({
        departmentid,
      });
      return departmentInfo;
    } else {
      throw new makeError({
        message: "올바른 부서 번호가 아닙니다.",
        code: 404,
      });
    }
  };

  changePay = async ({ departmentid, upOrDawn, percentage }) => {
    if (
      10 <= Number(departmentid) &&
      Number(departmentid) <= 270 &&
      (upOrDawn === "plus" || upOrDawn === "minus") &&
      Number(percentage) <= 100
    ) {
      const findEmployees = await this.DepartmentRepository.findEmployees({
        departmentid,
      });
      for (let i = 0; i < findEmployees.length; i++) {
        let pay;
        const employeeId = findEmployees[i].employee_id;
        const salary = findEmployees[i].salary;
        const variableValue = (findEmployees[i].salary * percentage) / 100;
        if (upOrDawn === "plus") {
          pay = Number(salary) + Number(variableValue);
          await this.DepartmentRepository.changePay({ employeeId, pay });
        } else if (upOrDawn === "minus") {
          pay = Number(salary) - Number(variableValue);
          await this.DepartmentRepository.changePay({ employeeId, pay });
        }
      }

      const departmentName = await this.DepartmentRepository.findDepartment({
        departmentid,
      });

      let message;

      if (upOrDawn === "plus") {
        message = "인상";
      } else if (upOrDawn === "minus") {
        message = "조정";
      }
      return { department: departmentName[0].department_name, message };
    } else {
      throw new makeError({
        message: "입력한 값이 올바르지 않습니다.",
        code: 404,
      });
    }
  };
}

module.exports = DepartmentService;
