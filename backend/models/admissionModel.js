const { db } = require("../config/db");

const createAdmission = async (data) => {
  const sql = `
    INSERT INTO admissions (
      firstName, lastName, email, phone, dob, gender,
      fatherName, motherName, guardianPhone,
      course, qualification, percentage, passingYear,
      address, city, state, pincode
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.dob,
    data.gender,
    data.fatherName,
    data.motherName,
    data.guardianPhone || null,
    data.course,
    data.qualification,
    data.percentage,
    data.passingYear,
    data.address,
    data.city,
    data.state,
    data.pincode,
  ];

  const [result] = await db.execute(sql, values);

  return result.insertId;
};

const getAllAdmissions = async () => {
  const [rows] = await db.execute("SELECT * FROM admissions ORDER BY id DESC");

  return rows;
};

const getAdmissionById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM admissions WHERE id = ?", [
    id,
  ]);

  return rows[0];
};

const updateAdmission = async (id, data) => {
  const sql = `
    UPDATE admissions SET
      firstName = ?,
      lastName = ?,
      email = ?,
      phone = ?,
      dob = ?,
      gender = ?,
      fatherName = ?,
      motherName = ?,
      guardianPhone = ?,
      course = ?,
      qualification = ?,
      percentage = ?,
      passingYear = ?,
      address = ?,
      city = ?,
      state = ?,
      pincode = ?
    WHERE id = ?
  `;

  const values = [
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.dob,
    data.gender,
    data.fatherName,
    data.motherName,
    data.guardianPhone || null,
    data.course,
    data.qualification,
    data.percentage,
    data.passingYear,
    data.address,
    data.city,
    data.state,
    data.pincode,
    id,
  ];

  const [result] = await db.execute(sql, values);

  return result.affectedRows;
};

const deleteAdmission = async (id) => {
  const [result] = await db.execute("DELETE FROM admissions WHERE id = ?", [
    id,
  ]);

  return result.affectedRows;
};

module.exports = {
  createAdmission,
  getAllAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
};
