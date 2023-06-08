const express = require("express");
const router = express.Router();
const publicDataController = require("../controllers/publicDataControllers");
const PublicDataController = new publicDataController();

router.get("/name", PublicDataController.findDentistryName);

module.exports = router;
