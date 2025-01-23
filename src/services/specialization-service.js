const SpecilizationRepo = require("../repository/specialization")

class SpecilizationService {
    constructor() {
        this.specilizationRepo = new SpecilizationRepo();
    }

    async createSpecialization(data) {
        try {
          const specialization = await this.specilizationRepo.createSpecilization(
            data
          );
          return specialization;
        } catch (error) {
          console.log(
            "Something went wrong at the service layer while creating specialization"
          );
          throw error;
        }
      }
    
      async addMoreSpecialization(data) {
        try {
          const specialization = await this.specilizationRepo.addmoreSpecilization(
            data
          );
          return specialization;
        } catch (error) {
          console.log(
            "Something went wrong at the service layer while adding more specialization"
          );
          throw error;
        }
      }
    
      async updateSpecialization(id, newData) {
        try {
          const updatedSpecialization =
            await this.specilizationRepo.updateSpecilization(id, newData);
          return updatedSpecialization;
        } catch (error) {
          console.log(
            "Something went wrong at the service layer while updating specialization"
          );
          throw error;
        }
      }
    
      async getAllSpecialization() {
        try {
          const result = await this.specilizationRepo.getAllSpecialization();
          return result;
        } catch (error) {
          console.log(
            "Something went wrong at the service layer while Fetching specialization"
          );
          throw error;
        }
      }
    
      async deleteSpecialization(id) {
        try {
          const deletedSpecialization =
            await this.specilizationRepo.deleteSpecilization(id);
          return deletedSpecialization;
        } catch (error) {
          console.log(
            "Something went wrong at the service layer while deleting specialization"
          );
          throw error;
        }
      }
}

module.exports = SpecilizationService;