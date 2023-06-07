const departmentService = require("../services/departmentService");

class DepartmentController {
  DepartmentService = new departmentService();

  departmentInfo = async (req, res, next) => {
    try {
      const { departmentid } = req.query;
      const departmentInfo = await this.DepartmentService.departmentInfo({
        departmentid,
      });
      res.status(200).json({ departmentInfo });
    } catch (error) {
      next(error);
    }
  };

  changePay = async (req, res, next) => {
    try {
      const { departmentid, upOrDawn, percentage } = req.query;
      const pay = await this.DepartmentService.changePay({
        departmentid,
        upOrDawn,
        percentage,
      });
      res.status(200).json({
        message:
          pay.department + "부서의 급여가 " + pay.message + " 완료 했습니다.",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = DepartmentController;
