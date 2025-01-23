const PatientService = require("../services/patient-service");

const patientService = new PatientService();

const create = async (req, res) => {
  try {
    const response = await patientService.CreatePatient(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a Patient Profile",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a patient",
      err: error,
    });
  }
};

const upadte = async (req, res) => {
  try {
    const response = await patientService.updatePatient(
      req.body,
      req.params.id
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated User profile status",
      token: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a patient profile",
      err: error,
    });
  }
};

const getbyId = async (req, res) => {
  try {
    const response = await patientService.getbyid(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully Fatched the patient Profile",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the Patient profile",
      err: error,
    });
  }
};

const deletePatient = async (req, res) => {
  try {
    const response = await patientService.deletePatient(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully deleted the patient Profile",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the Patient profile",
      err: error,
    });
  }
};

module.exports = {
  create,
  getbyId,
  upadte,
  deletePatient,
};
