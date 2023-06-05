const express = require("express");
const router = require("./src/routes");

const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql2");
const pool = mysql.createPool({
  user: process.env.DBuser,
  password: process.env.DBpassword,
  database: process.env.DBdatabase,
  host: process.env.DBhost,
});
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL 연결 실패", err);
    return;
  }
  console.log("MySQL 연결 성공");
  console.log("현재 커넥션 개수:", pool._allConnections.length);
  connection.release();
});
