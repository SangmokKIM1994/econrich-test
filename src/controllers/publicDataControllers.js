const publicDataService = require("../services/publicDataService");

class PublicDataController {
  PublicDataService = new publicDataService();

  findDentistryName = async (req, res, next) => {
    try {
      const { name } = req.query;
      const bankList = await this.PublicDataService.findDentistryName({
        name,
      });
      res.status(200).json({ count: bankList.count, list: bankList.list });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PublicDataController;
