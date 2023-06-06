const employeeService = require("../services/employeeServices");

class Employeecontroller {
  EmployeeService = new employeeService();

  findCurrentInformation = async (req, res, next) => {
    const { employeeid } = req.query;
    try {
      const currentInformation =
        await this.EmployeeService.findCurrentInformation({ employeeid });
      res.status(200).json({ currentInformation });
    } catch (error) {
      next(error);
    }
  };

  findHistoryInformation = async (req, res, next) => {
    const { employeeid } = req.query;
    try {
      const employeeInformation =
        await this.EmployeeService.findHistoryInformation({ employeeid });
      res.status(200).json({
        currentInformation: employeeInformation.currentInformation,
        historyInformation: employeeInformation.historyInformation,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Employeecontroller;
