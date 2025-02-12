const MeetingRepository = require("../repository/meeting");

class MeetingService {
  constructor() {
    this.meetingRepository = new MeetingRepository();
  }

  // Create a Meeting
  async createMeeting(data) {
    try {
      const meeting = await this.meetingRepository.createMeeting(data);
      return meeting;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while creating a meeting"
      );
      throw error;
    }
  }

  // Get All Meetings
  async getAllMeetings() {
    try {
      const meetings = await this.meetingRepository.getAllMeetings();
      return meetings;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving all meetings"
      );
      throw error;
    }
  }

  // Get Meeting by ID
  async getMeetingById(meetingId) {
    try {
      const meeting = await this.meetingRepository.getMeetingById(meetingId);
      return meeting;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving a meeting by ID"
      );
      throw error;
    }
  }

  // Get Meetings by Patient ID
  async getMeetingsByPatientId(patientId) {
    try {
      const meetings = await this.meetingRepository.getMeetingsByPatientId(patientId);
      return meetings;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving meetings by patient ID"
      );
      throw error;
    }
  }

  // Get Meetings by Doctor ID
  async getMeetingsByDoctorId(doctorId) {
    try {
      const meetings = await this.meetingRepository.getMeetingsByDoctorId(doctorId);
      return meetings;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving meetings by doctor ID"
      );
      throw error;
    }
  }

  // Update Meeting Status
  async updateMeetingStatus(meetingId, status) {
    try {
      const updatedMeeting = await this.meetingRepository.updateMeetingStatus(meetingId, status);
      return updatedMeeting;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while updating meeting status"
      );
      throw error;
    }
  }

  // Cancel a Meeting
  async cancelMeeting(meetingId) {
    try {
      const canceledMeeting = await this.meetingRepository.cancelMeeting(meetingId);
      return canceledMeeting;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while canceling a meeting"
      );
      throw error;
    }
  }

  // Delete a Meeting
  async deleteMeeting(meetingId) {
    try {
      const response = await this.meetingRepository.deleteMeeting(meetingId);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while deleting a meeting"
      );
      throw error;
    }
  }
}

module.exports = MeetingService;