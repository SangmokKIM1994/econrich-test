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
    const query = `SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.email,
    e.phone_number,
    e.hire_date,
    e.job_id,
    e.salary,
    e.commission_pct,
    e.manager_id,
    e.department_id,
    v.job_id,
    v.manager_id,
    v.department_id,
    v.location_id,
    v.country_id,
    v.department_name,
    v.job_title,
    v.city,
    v.state_province,
    v.country_name,
    v.region_name
  FROM
    employees e
    JOIN emp_details_view v ON e.employee_id = v.employee_id
  WHERE
    e.employee_id = ?`;
    const [currentInformation] = await pool.query(query, [employeeid]);
    return currentInformation[0];
  };

  findHistoryInformation = async ({ employeeid }) => {
    const findHistoryQuery = `SELECT j.job_id, j.job_title, d.department_id, d.department_name, h.start_date, h.end_date
    FROM job_history h
    JOIN jobs j ON h.job_id = j.job_id
    JOIN departments d ON h.department_id = d.department_id
    WHERE h.employee_id = ?`;

    const [historyInformation] = await pool.query(findHistoryQuery, [
      employeeid,
    ]);
    return historyInformation[0];
  };
}

module.exports = EmployeeRepository;
