const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/Authorization");

const SpecializationController = require("../../controller/specialization-controller");

// Rotes for managing Specialization
router.post(
  "/specialization/bulkadd",
  authorize(["admin"]),
  SpecializationController.createSpecialization
);
router.post(
  "/specialization/add",
  authorize(["doctor"]),
  SpecializationController.addMoreSpecialization
);
router.put(
  "/specialization/:id",
  authorize(["admin"]),
  SpecializationController.updateSpecialization
);
router.get("/specialization", SpecializationController.getAllSpecialization);
router.delete(
  "/specialization/:id",
  authorize(["admin"]),
  SpecializationController.deleteSpecialization
);

module.exports = router;
