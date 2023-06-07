const express = require("express");
const router = express.Router();
const EmployeeRouter = require("./employeeRoute");
const DepartmentRouter = require("./departmentRoute");

router.use("/employee", EmployeeRouter);
router.use("/department", DepartmentRouter);

router.get("/", (req, res) => {
  res.send("정상요청 완료");
});

module.exports = router;
