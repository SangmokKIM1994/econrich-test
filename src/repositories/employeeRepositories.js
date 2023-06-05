const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createPool({
  user: process.env.DBuser,
  password: process.env.DBpassword,
  database: process.env.DBdatabase,
  host: process.env.DBhost,
});

class EmployeeRepository {
  findCurrentInformation = async ({ employeeid }) => {
    const query = `SELECT * FROM employees WHERE employee_id = ${employeeid}`;
    const [currentInformation] = await pool.query(query);
    return currentInformation;
  };
}

module.exports = EmployeeRepository;
