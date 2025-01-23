const HospitalService = require("../services/hospital-service")

const hospitalService = new HospitalService();

const createHospital = async (req, res) => {
    try {
        const hospital = await hospitalService.createHospital(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create hospital",
            err: error,
        });
    }
};

const createBulkHospital = async (req, res) => {
    try {
        const hospital = await hospitalService.createbulkHospital(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created hospitals",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create hospitals",
            err: error.errors[0].message,
        });
    }
};

const updateHospital = async (req, res) => {
    try {
        const updatedHospital = await hospitalService.updateHospital(req.body, req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully updated hospital",
            data: updatedHospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update hospital",
            err: error.errors[0].message,
        });
    }
};

const getAllHospital = async (req, res) => {
    try {
        const result = await hospitalService.getAllHospital();
        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospitals",
            data: result,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospitals",
            err: error,
        });
    }
};

const getById = async (req, res) => {
    try {
        const hospital = await hospitalService.getById(req.params.id);
        if (!hospital || hospital.length === 0) {
            return res.status(404).json({
              success: false,
              message: "No hospitals found that are verified",
              data: {},
              err: {},
            });
          }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error,
        });
    }
};

const getBycity = async (req, res) => {
    try {
        const hospital = await hospitalService.getBycity(req.body);
        if (hospital.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hospitals found for the given city",
                data: {},
                err: {},
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
}

const getByState = async (req, res) => {
    try {
        const hospital = await hospitalService.getBystate(req.body);
        if (hospital.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hospitals found for the given state",
                data: {},
                err: {},
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
}

const Verified = async (req, res) => {
    try {
        const hospital = await hospitalService.getVerified(req.params);
        if (!hospital || hospital.length === 0) {
            return res.status(404).json({
              success: false,
              message: "No hospitals found that are verified",
              data: {},
              err: {},
            });
          }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.error("Error in Verified Controller:", error.message, error.stack);
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
}

const deleteHospital = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHospital = await hospitalService.deleteHospital(id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted hospital",
            data: deletedHospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete hospital",
            err: error.errors[0].message,
        });
    }
};


module.exports = {
  createHospital,
  createBulkHospital,
  updateHospital,
  getAllHospital,
  getById,
  getBycity,
  getByState,
  Verified,
  deleteHospital,
};
