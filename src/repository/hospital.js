const { Hospital } = require("../models/index");

class HospitalRepository {
  async createbulkHosptal(data) {
    try {
      const hospital = await Hospital.bulkCreate(data);
      return hospital;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async createHospital(data) {
    try {
      const hospital = await Hospital.create(data);
      if (hospital) {
        const data = {
          is_profile_complete: true,
        };
        await User.update(data, {
          where: {
            id: hospital.dataValues.user_id,
          },
        });
      }
      return hospital;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async updateHospital(data, hospitalId) {
    try {
      const response = await Hospital.update(data, {
        where: {
          id: hospitalId,
        },
      });

      if (response[0] > 0) {
        const updatedHospital = await Hospital.findOne({
          where: { id: hospitalId },
        });

        return updatedHospital;
      }
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getAllHospital() {
    try {
      const response = await Hospital.findAll();
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getById(hospitalId) {
    try {
      const response = await Hospital.findOne({
        where: {
          id: hospitalId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getByCity(city) {
    try {
      const response = await Hospital.findAll({
        where: {
          cityName: city.cityName,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at Repository lavel");
      throw error;
    }
  }

  async getBystate(state) {
    try {
      const response = await Hospital.findAll({
        where: {
          stateName: state.stateName,
        },
      });
      return response
    } catch (error) {
      console.log("Something wrong at Repository lavel");
      throw error;
    }
  }

  async getVerified(verified) {
    try {
      const response = await Hospital.findAll({
        where: {
          isVerified: verified,
        },
      });
      if (!response || response.length === 0) {
        console.log('No verified hospitals found.');
      } else {
        return response;
      }
    } catch (error) {
      console.log("Something wrong at Repository lavel");
      throw error;
    }
  }

  async deleteHospital(hospitalId) {
    try {
      const response = await Hospital.destroy({
        where: {
          id: hospitalId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }
}

module.exports = HospitalRepository;
