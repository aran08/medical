const SpecilizationService = require("../services/specialization-service");

const specilizationService = new SpecilizationService();

const createSpecialization = async (req, res) => {
  try {
    const specialization = await specilizationService.createSpecialization(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created specialization(s)",
      data: specialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create specialization(s)",
      err: error.errors[0].message,
    });
  }
};

const addMoreSpecialization = async (req, res) => {
  try {
    const specialization = await specilizationService.addMoreSpecialization(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully added specialization",
      data: specialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to add specialization",
      err: error.errors[0].message,
    });
  }
};

const updateSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSpecialization = await specilizationService.updateSpecialization(
      id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated specialization",
      data: updatedSpecialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update specialization",
      err: error.errors[0].message,
    });
  }
};

const getAllSpecialization = async (req, res) => {
  try {
    const result = await specilizationService.getAllSpecialization();
    return res.status(200).json({
      success: true,
      message: "Successfully Fetched specialization",
      data: result,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch specialization",
      err: error.errors[0].message,
    });
  }
};

const deleteSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSpecialization = await specilizationService.deleteSpecialization(id);
    return res.status(200).json({
      success: true,
      message: "Successfully deleted specialization",
      data: deletedSpecialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete specialization",
      err: error.errors[0].message,
    });
  }
};

module.exports = {
    createSpecialization,
    updateSpecialization,
    deleteSpecialization,
    getAllSpecialization,
    addMoreSpecialization
}