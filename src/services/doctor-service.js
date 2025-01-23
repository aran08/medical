const DoctorRepository = require("../repository/doctor");

class DoctorService {

    constructor() {
        this.doctorRepository =new DoctorRepository();
    }

    async Creatdoctor(data) {
        try {
            const doctor = await this.doctorRepository.CreatDoctor(data);
            return doctor;
        } catch (error) {
            console.log("Something wrong at the service Layer");
            throw(error)
        }
    }

    async getAll() {
        try {
            const response = await this.doctorRepository.getall();
            return response;
        } catch (error) {
            console.log("Something wrong at the Service layer");
            throw(error);
        }
    }

    async getbyHospitalId(hospitalId) {
        try {
            const response = await this.doctorRepository.getbyHospitalId(hospitalId);
            return response;
        } catch (error) {
            console.log("Something wrong at the Service layer");
            throw(error);
        }
    }

    async GetById(doctorid) {
        
        try {
            const doctor = await this.doctorRepository.GetbyId(doctorid);
            return doctor;
        } catch (error) {
            console.log("Something wrong at the Service layer");
            throw(error);
        }
    }

    async update(data, doctorid) {
        try {
            const response = await this.doctorRepository.update(data, doctorid)
        } catch (error) {
            console.log("Something wrong at the Service layer");
            throw(error);
        }
    }

    async Delete(doctorid) {
        try {
            const doctor = await this.doctorRepository.Delete(doctorid);
            return doctor;
        } catch (error) {
            console.log("Something wrong at the Service layer");
            throw(error);
        }
    }

}

module.exports = DoctorService;