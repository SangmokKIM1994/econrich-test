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
}

module.exports = DepartmentService;
