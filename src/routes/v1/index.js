const express = require("express");
const router = express.Router();

const UserApi = require("./user");
const HospitalApi = require("./hospital");
const DoctorApi = require("./doctor");
const SpecializationApi = require("./specialization");
const PatientApi = require("./patient");

router.use(UserApi);
router.use(HospitalApi);
router.use(DoctorApi);
router.use(SpecializationApi);
router.use(PatientApi);

module.exports = router;
