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
}

module.exports = DepartmentController;
