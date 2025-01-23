const PatientRepository = require("../repository/patient");

class PatientService {
  constructor() {
    this.patientRepository = new PatientRepository();
  }

  async CreatePatient(data) {
    try {
      const response = await this.patientRepository.CreatePatient(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async updatePatient(data, id) {
    try {
      const response = await this.patientRepository.updatePatient(data, id);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async getbyid(patientId) {
    try {
      const response = await this.patientRepository.getbyId(patientId);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async deletePatient(userid) {
    try {
      const response = await this.patientRepository.deletePatient(userid);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}

module.exports = PatientService;
