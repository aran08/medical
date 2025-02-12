const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/Authorization");

const MeetingController = require("../../controller/meeting-controller");

// Routes for Meeting Management

// Create a Meeting (Only patients can create meetings)
router.post(
  "/meeting/create",
//   authorize(["patient"]),
  MeetingController.createMeeting
);

// Get All Meetings (Only admins can view all meetings)
router.get(
  "/meeting/list",
//   authorize(["admin"]),
  MeetingController.getAllMeetings
);

// Get Meeting by ID (Patients, doctors, and admins can view a specific meeting)
router.get(
  "/meeting/:id",
//   authorize(["patient", "doctor", "admin"]),
  MeetingController.getMeetingById
);

// Get Meetings by Patient ID (Patients and admins can view their own meetings)
router.get(
  "/meeting/patient/:patientId",
//   authorize(["patient", "admin"]),
  MeetingController.getMeetingsByPatientId
);

// Get Meetings by Doctor ID (Doctors and admins can view their own meetings)
router.get(
  "/meeting/doctor/:doctorId",
//   authorize(["doctor", "admin"]),
  MeetingController.getMeetingsByDoctorId
);

// Update Meeting Status (Only doctors and admins can update meeting status)
router.patch(
  "/meeting/:id/status",
//   authorize(["doctor", "admin"]),
  MeetingController.updateMeetingStatus
);

// Cancel a Meeting (Only patients and admins can cancel meetings)
router.patch(
  "/meeting/:id/cancel",
//   authorize(["patient", "admin"]),
  MeetingController.cancelMeeting
);

// Delete a Meeting (Only admins can delete meetings)
router.delete(
  "/meeting/:id",
//   authorize(["admin"]),
  MeetingController.deleteMeeting
);

module.exports = router;