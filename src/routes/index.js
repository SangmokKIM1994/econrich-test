const express = require("express");
const router = express.Router();
const EmployeeRouter = require("./employeeRoute");

router.use("/employee", EmployeeRouter);

router.get("/", (req, res) => {
  res.send("정상요청 완료");
});

module.exports = router;
