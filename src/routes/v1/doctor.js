const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/Authorization");

const DoctorController = require("../../controller/doctor-controller");

router.post("/doctor/create", 
  // authorize(["doctor"]), 
  DoctorController.create);
router.get(
  "/doctor/hospital/:id",
  // authorize(["doctor"]),
  DoctorController.getbyHospitalId
);
router.get(
  "/doctor/list",
  // authorize(["patient", "admin"]),
  DoctorController.getAll
);
router.get(
  "/doctor/:id",
  // authorize(["patient", "admin", "doctor"]),
  DoctorController.getbyid
);
router.put(
  "/doctor/update/:id",
  // authorize(["doctor"]),
  DoctorController.update
);
router.delete(
  "/doctor/delete/:id",
  // authorize(["doctor", "admin"]),
  DoctorController.deletedoctor
);

module.exports = router;
