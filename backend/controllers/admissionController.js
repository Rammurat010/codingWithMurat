const Admission = require("../models/admissionModel");

const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "dob",
  "gender",
  "fatherName",
  "motherName",
  "course",
  "qualification",
  "percentage",
  "passingYear",
  "address",
  "city",
  "state",
  "pincode",
];

const validateAdmission = (data) => {
  const missing = requiredFields.filter(
    (field) =>
      data[field] === undefined ||
      data[field] === null ||
      String(data[field]).trim() === "",
  );

  if (missing.length) {
    return `Missing required fields: ${missing.join(", ")}`;
  }

  if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    return "Invalid email address";
  }

  if (!/^\d{10}$/.test(data.phone)) {
    return "Phone number must contain 10 digits";
  }

  if (data.guardianPhone && !/^\d{10}$/.test(data.guardianPhone)) {
    return "Guardian phone must contain 10 digits";
  }

  if (
    !Number.isFinite(Number(data.percentage)) ||
    Number(data.percentage) < 0 ||
    Number(data.percentage) > 100
  ) {
    return "Percentage must be between 0 and 100";
  }

  if (
    !Number.isInteger(Number(data.passingYear)) ||
    Number(data.passingYear) < 1990 ||
    Number(data.passingYear) > new Date().getFullYear()
  ) {
    return "Invalid passing year";
  }

  if (!/^\d{6}$/.test(data.pincode)) {
    return "PIN code must contain 6 digits";
  }

  return null;
};

// CREATE ADMISSION
exports.createAdmission = async (req, res) => {
  try {
    const error = validateAdmission(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const id = await Admission.createAdmission(req.body);

    res.status(201).json({
      success: true,
      message: "Admission submitted successfully",
      data: { id },
    });
  } catch (error) {
    console.error("Create Admission:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit admission",
    });
  }
};

// GET ALL ADMISSIONS
exports.getAllAdmissions = async (req, res) => {
  try {
    const data = await Admission.getAllAdmissions();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch admissions",
    });
  }
};

// GET SINGLE ADMISSION
exports.getAdmissionById = async (req, res) => {
  try {
    const data = await Admission.getAdmissionById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch admission",
    });
  }
};

// UPDATE ADMISSION
exports.updateAdmission = async (req, res) => {
  try {
    const error = validateAdmission(req.body);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }

    const updated = await Admission.updateAdmission(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission updated successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update admission",
    });
  }
};

// DELETE ADMISSION
exports.deleteAdmission = async (req, res) => {
  try {
    const deleted = await Admission.deleteAdmission(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete admission",
    });
  }
};
