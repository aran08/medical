const { Doctor } = require("../models/index");
const { User } = require("../models/index");

class DoctorRepository {
  async CreatDoctor(data) {
    try {
      const {
        user_id,
        first_name,
        last_name,
        hospital_id,
        years_of_experience,
        medicalhistory,
        availability,
        specializations,
      } = data;

      const doctor = await Doctor.create({
        user_id,
        first_name,
        last_name,
        hospital_id,
        years_of_experience,
        medicalhistory,
        availability,
      });

      if (specializations && specializations.length > 0) {
        await doctor.addSpecialization(specializations);
      }
      
      if (doctor) {
        const data = {
          is_profile_complete: true,
        };
        await User.update(data, {
          where: {
            id: doctor.dataValues.user_id,
          },
        });
      }
      return doctor;
    } catch (error) {
      console.log("Something Wrong at Repository layer");
      throw error;
    }
  }

  async getall() {
    try {
      const response = await Doctor.findAll();
      return response;
    } catch (error) {
      console.log("Something Wrong at Repository layer");
      throw error;
    }
  }

  async getbyHospitalId(hospitalId) {
    try {
      const response = await Doctor.findAll({
        where: {
          hospitalId: hospitalId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something Wrong at Repository layer");
      throw error;
    }
  }

  async GetbyId(doctorid) {
    try {
      const doctor = await Doctor.findByPk(doctorid);

      return doctor;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async update(data, doctorid) {
    try {
      const response = await Doctor.update(data, {
        where: {
          id: doctorid,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async Delete(doctorid) {
    try {
      const response = await Doctor.destroy({
        where: {
          id: doctorid,
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
      return true;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }
  
}

module.exports = DoctorRepository;
