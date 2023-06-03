const express = require("express");
const router = express.Router();

// router.use();

router.get("/", (req, res) => {
  res.send("정상요청 완료");
});

module.exports = router;