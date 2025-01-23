const { Patient } = require("../models/index");
const { User } = require("../models/index");

class PatientRepository {
  async CreatePatient(data) {
    try {
      const patient = await Patient.create(data);
      if (patient) {
        const data = {
          is_profile_complete: true,
        };
        await User.update(data, {
          where: {
            id: patient.dataValues.user_id,
          },
        });
      }
      return patient;
    } catch (error) {
      console.log(
        "Something went wrong while creating the patientprofile in repository layer"
      );
      throw { error };
    }
  }

  async getbyId(patientId) {
    try {
      const response = await Patient.findOne({
        where: {
          id: patientId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong while Fetching patient information");
      throw error;
    }
  }

  async updatePatient(data, id) {
    try {
      const response = await Patient.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong while updating patient information");
      throw error;
    }
  }

  async deletePatient(patientid) {
    try {
      const response = await Patient.destroy({
        where: {
          id: patientid,
        },
      });

      if (response.success === true) {
        const data = {
          is_profile_complete: false,
        };
        await User.update(data, {
          where: {
            id: response.data.user_id,
          },
        });
      }

      return response;
    } catch (error) {
      console.log("Something went wrong while deleting patient information");
      throw error;
    }
  }
}

module.exports = PatientRepository;
