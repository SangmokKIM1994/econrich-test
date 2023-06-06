const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createPool({
  user: process.env.DBuser,
  password: process.env.DBpassword,
  database: process.env.DBdatabase,
  host: process.env.DBhost,
});

class DepartmentRepository {
  departmentInfo = async ({ departmentid }) => {
    const query = `SELECT d.department_id, d.department_name, d.manager_id, m.first_name AS manager_first_name, m.last_name AS manager_last_name, d.location_id, l.city, l.state_province
    FROM departments d
    JOIN employees m ON d.manager_id = m.employee_id
    JOIN locations l ON d.location_id = l.location_id
    WHERE d.department_id = ?`;
    const [departmentInfo] = await pool.query(query, [departmentid]);
    return departmentInfo;
  };
}

module.exports = DepartmentRepository;
