const HospitalRepository = require("../repository/hospital")

class HospitalService {
  constructor() {
    this.hospitalrepository = new HospitalRepository();
  }

  async createbulkHospital(data) {
    try {
      const hospital = await this.hospitalrepository.createbulkHosptal(data);
      return hospital;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while creating Hospital"
      );
      throw error;
    }
  }

  async createHospital(data) {
    try {
      const hospital = await this.hospitalrepository.createHospital(data);
      return hospital;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while creating hospital"
      );
      throw error;
    }
  }

  async updateHospital(data, hospitalId) {
    try {
      const response = await this.hospitalrepository.updateHospital(
        data,
        hospitalId
      );
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while updating hospital"
      );
      throw error;
    }
  }

  async getAllHospital() {
    try {
      const hospitals = await this.hospitalrepository.getAllHospital();
      return hospitals;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospitals"
      );
      throw error;
    }
  }

  async getById(hospitalId) {
    try {
      const hospital = await this.hospitalrepository.getById(hospitalId);
      return hospital;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async getBycity(city) {
    try {
      const response = await this.hospitalrepository.getByCity(city);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async getBystate(state) {
    try {
      const response = await this.hospitalrepository.getBystate(state);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async getVerified(verified) {
    try {
      const response = await this.hospitalrepository.getVerified(verified);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async deleteHospital(hospitalId) {
    try {
      const response = await this.hospitalrepository.deleteHospital(hospitalId);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while deleting hospital"
      );
      throw error;
    }
  }

}

module.exports = HospitalService;