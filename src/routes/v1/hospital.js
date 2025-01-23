const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/Authorization");

const HospitalController = require("../../controller/hospital-controller");

// Routes for Hospital Management
router.post(
  "/hospital",
  authorize(["hospital"]),
  HospitalController.createHospital
);
router.post(
  "/hospital/bulk",
  authorize(["admin"]),
  HospitalController.createBulkHospital
);
router.put(
  "/hospital/:id",
  authorize(["hospital", "admin"]),
  HospitalController.updateHospital
);
router.get(
  "/hospital",
  authorize(["patient"]),
  HospitalController.getAllHospital
);
router.get(
  "/hospital/verified",
  authorize(["patient"]),
  HospitalController.Verified
);
router.get(
  "/hospital/:id",
  authorize(["patient", "doctor", "hospital"]),
  HospitalController.getById
);
router.post(
  "/hospital/city",
  authorize(["doctor", "patient", "admin"]),
  HospitalController.getBycity
);
router.post(
  "/hospital/state",
  authorize(["doctor", "patient", "admin"]),
  HospitalController.getByState
);
router.delete(
  "/hospital/:id",
  authorize(["hospital", "admin"]),
  HospitalController.deleteHospital
);

module.exports = router;
