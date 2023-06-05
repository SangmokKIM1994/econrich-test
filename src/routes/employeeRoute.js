const express = require("express");
const router = express.Router();
const employeecontroller = require("../controllers/employeeControllers");
const Employeecontroller = new employeecontroller();

router.get("/current", Employeecontroller.findCurrentInformation);
// router.get("/history", Employeecontroller.findHistoryInformation);

module.exports = router;
