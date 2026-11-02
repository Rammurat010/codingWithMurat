const { db } = require("../config/db");

const createContact = async (contactData) => {
  const { name, email, phone, subject, message } = contactData;

  const sql = `
    INSERT INTO contacts (name, email, phone, subject, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  const [result] = await db.execute(sql, [
    name,
    email,
    phone,
    subject,
    message,
  ]);

  return result;
};

module.exports = { createContact };
