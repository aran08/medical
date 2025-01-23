const {Specialization} = require("../models/index");

class SpecilizationRepo {
  
    async createSpecilization(data) {
        try {
          const specialization = await Specialization.bulkCreate(data);
          return specialization;
        } catch (error) {
          console.log("Something wrong at repository layer");
          throw error;
        }
      }
    
      async addmoreSpecilization(data) {
        try {
          const specialization = await Specialization.create(data);
          return specialization;
        } catch (error) {
          console.log("Something wrong at repository layer");
          throw error;
        }
      }
    
      async updateSpecilization(id, newData) {
        try {
          const specializationRecord = await Specialization.findOne({
            where: { id: id },
          });
    
          if (!specializationRecord) {
            throw new Error("Specialization not found");
          }
    
          const updatedSpecialization = {
            ...specializationRecord.specialization,
            ...newData,
          };
          const updatedRecord = await Specialization.update(
            { specialization: updatedSpecialization },
            { where: { id: id }, returning: true }
          );
    
          return updatedRecord[1][0];
        } catch (error) {
          console.log("Something wrong at repository layer");
          throw error;
        }
      }
    
      async getAllSpecialization() {
        try {
          const data = await Specialization.findAll();
          return data;
        } catch (error) {
          console.log("Something wrong at repository layer");
          throw error;
        }
      }
    
      async deleteSpecilization(id) {
        try {
          const specialization = await Specialization.destroy({
            where: { id: id },
          });
          return specialization;
        } catch (error) {
          console.log("Something wrong at repository layer");
          throw error;
        }
      }

}

module.exports = SpecilizationRepo;