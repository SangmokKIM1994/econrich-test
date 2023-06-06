const express = require("express");
const router = express.Router();
const departmentcontroller = require("../controllers/departmentControllers");
const Departmentcontroller = new departmentcontroller();

router.get("/info", Departmentcontroller.departmentInfo);
// router.patch("/changepay")

module.exports = router;
