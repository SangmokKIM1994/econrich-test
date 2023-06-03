const express = require("express");
const router = require("./src/routes");

const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql2");
const connection = mysql.createConnection({
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
connection.connect((err) => {
  if (err) {
    console.error("MySQL연결 실패", err);
  } else {
    console.log("데이터베이스 연결 성공");
  }
});
