const axios = require("axios");
class PublicDataRepository {
  findDentistryName = async ({ url }) => {
    const bankInfo = axios.get(url);
    return bankInfo;
  };
}

module.exports = PublicDataRepository;
