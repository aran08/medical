const MeetingService = require("../services/meeting -service");

const meetingService = new MeetingService();

// Create a Meeting
const createMeeting = async (req, res) => {
  try {
    const meeting = await meetingService.createMeeting(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created meeting",
      data: meeting,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create meeting",
      err: error,
    });
  }
};

// Get All Meetings
const getAllMeetings = async (req, res) => {
  try {
    const meetings = await meetingService.getAllMeetings();
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all meetings",
      data: meetings,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch meetings",
      err: error,
    });
  }
};

// Get Meeting by ID
const getMeetingById = async (req, res) => {
  try {
    const meeting = await meetingService.getMeetingById(req.params.id);
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "No meeting found with the given ID",
        data: {},
        err: {},
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched meeting",
      data: meeting,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch meeting",
      err: error,
    });
  }
};

// Get Meetings by Patient ID
const getMeetingsByPatientId = async (req, res) => {
  try {
    const meetings = await meetingService.getMeetingsByPatientId(req.params.patientId);
    if (!meetings || meetings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No meetings found for the given patient ID",
        data: {},
        err: {},
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched meetings for the patient",
      data: meetings,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch meetings for the patient",
      err: error,
    });
  }
};

// Get Meetings by Doctor ID
const getMeetingsByDoctorId = async (req, res) => {
  try {
    const meetings = await meetingService.getMeetingsByDoctorId(req.params.doctorId);
    if (!meetings || meetings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No meetings found for the given doctor ID",
        data: {},
        err: {},
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched meetings for the doctor",
      data: meetings,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch meetings for the doctor",
      err: error,
    });
  }
};

// Update Meeting Status
const updateMeetingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedMeeting = await meetingService.updateMeetingStatus(req.params.id, status);
    return res.status(200).json({
      success: true,
      message: "Successfully updated meeting status",
      data: updatedMeeting,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update meeting status",
      err: error,
    });
  }
};

// Cancel a Meeting
const cancelMeeting = async (req, res) => {
  try {
    const canceledMeeting = await meetingService.cancelMeeting(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully canceled meeting",
      data: canceledMeeting,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to cancel meeting",
      err: error,
    });
  }
};

// Delete a Meeting
const deleteMeeting = async (req, res) => {
  try {
    const response = await meetingService.deleteMeeting(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully deleted meeting",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete meeting",
      err: error,
    });
  }
};

module.exports = {
  createMeeting,
  getAllMeetings,
  getMeetingById,
  getMeetingsByPatientId,
  getMeetingsByDoctorId,
  updateMeetingStatus,
  cancelMeeting,
  deleteMeeting,
};