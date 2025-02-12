const {meeting} = require("../models/index")
const { Meeting, Doctor, Patient } = require("../models/index");

class MeetingRepository {
  // Create a Meeting
  async createMeeting(data) {
    try {
      const meeting = await Meeting.create(data);
      return meeting;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Get All Meetings
  async getAllMeetings() {
    try {
      const meetings = await Meeting.findAll();
      return meetings;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Get Meeting by ID
  async getMeetingById(meetingId) {
    try {
      const meeting = await Meeting.findOne({
        where: {
          id: meetingId,
        },
      });
      return meeting;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Get Meetings by Patient ID
  async getMeetingsByPatientId(patientId) {
    try {
      const meetings = await Meeting.findAll({
        where: {
          patientId: patientId,
        },
        include: [
          {
            model: Doctor,
            attributes: ["id", "first_name", "last_name"],
          },
        ],
      });
      return meetings;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Get Meetings by Doctor ID
  async getMeetingsByDoctorId(doctorId) {
    try {
      const meetings = await Meeting.findAll({
        where: {
          doctorId: doctorId,
        },
        include: [
          {
            model: Patient,
            attributes: ["id", "name"],
          },
        ],
      });
      return meetings;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Update Meeting Status
  async updateMeetingStatus(meetingId, status) {
    try {
      const response = await Meeting.update(
        { status: status },
        {
          where: {
            id: meetingId,
          },
        }
      );

      if (response[0] > 0) {
        const updatedMeeting = await Meeting.findOne({
          where: { id: meetingId },
        });
        return updatedMeeting;
      }
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Cancel a Meeting
  async cancelMeeting(meetingId) {
    try {
      const response = await Meeting.update(
        { status: "canceled" },
        {
          where: {
            id: meetingId,
          },
        }
      );

      if (response[0] > 0) {
        const canceledMeeting = await Meeting.findOne({
          where: { id: meetingId },
        });
        return canceledMeeting;
      }
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  // Delete a Meeting
  async deleteMeeting(meetingId) {
    try {
      const response = await Meeting.destroy({
        where: {
          id: meetingId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }
}

module.exports = MeetingRepository;