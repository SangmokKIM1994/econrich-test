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

  findEmployees = async ({ departmentid }) => {
    const query = `SELECT *
    FROM employees
    WHERE department_id = ?`;
    const [result] = await pool.query(query, [departmentid]);
    const employees = Array.isArray(result) ? result : [result];
    return employees;
  };

  changePay = async ({ employeeId, pay }) => {
    const query = `UPDATE employees SET salary = ? WHERE employee_id = ?`;
    await pool.query(query, [pay, employeeId]);
  };

  findDepartment = async ({ departmentid }) => {
    const query = `SELECT department_name
    FROM departments
    WHERE department_id = ?`;
    const [department] = await pool.query(query, [departmentid]);
    return department;
  };
}

module.exports = DepartmentRepository;
