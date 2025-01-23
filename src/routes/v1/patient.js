const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/Authorization");

const PatientController = require("../../controller/patient-controller");

router.post(
  "/patient/profile",
  authorize(["patient"]),
  PatientController.create
);
router.get(
  "/patient/get/:id",
  authorize(["doctor", "patient"]),
  PatientController.getbyId
);
router.put(
  "/patient/:id",
  authorize(["admin", "patient"]),
  PatientController.upadte
);
router.delete(
  "/patient/delete/:id",
  authorize(["doctor", "patient"]),
  PatientController.deletePatient
);

module.exports = router;
