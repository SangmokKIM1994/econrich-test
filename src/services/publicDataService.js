const publicDataRepository = require("../repositories/publicDataRepositories");
const dotenv = require("dotenv");
dotenv.config();

class PublicDataService {
  PublicDataRepository = new publicDataRepository();

  findDentistryName = async ({ name }) => {
    const apikey = process.env.DataApiKey;
    const url = `http://apis.data.go.kr/B190021/branchinfo/brcode?serviceKey=${apikey}&krnBrm=${name}`;
    const bankInfo = await this.PublicDataRepository.findDentistryName({
      url,
    });
    return {
      count: bankInfo.data.trnListRowcount,
      list: bankInfo.data.trnList,
    };
  };
}

module.exports = PublicDataService;
