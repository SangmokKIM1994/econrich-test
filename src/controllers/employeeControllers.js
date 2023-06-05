const employeeService = require("../services/employeeServices");

class Employeecontroller {
  EmployeeService = new employeeService();

  findCurrentInformation = async (req, res, next) => {
    const { employeeid } = req.query;
    const currentInformation =
      await this.EmployeeService.findCurrentInformation({ employeeid });
    res.status(200).json({ currentInformation });
  };

  findHistoryInformation = async (req, res, next) => {};
}

module.exports = Employeecontroller;
