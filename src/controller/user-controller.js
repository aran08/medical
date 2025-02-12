const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.CreateUser(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a user",
      data: {
        id: user.id,
        role: user.role,
        is_profile_complete: user.is_profile_complete,
      },
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a user",
      err: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.LoginUser(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully Login",
      token: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to login a user",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const user = await userService.getAll();
    return res.status(200).json({
      success: true,
      message: "Successfully Fetched all User",
      token: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a user profile status",
      err: error,
    });
  }
};

const upadte = async (req, res) => {
  try {
    const user = await userService.update(req.body, req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully updated User profile ststus",
      token: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a user profile status",
      err: error,
    });
  }
};

const me = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is missing or invalid",
      });
    }
    const token = authHeader.split(" ")[1];
    const user = await userService.me(token);
    return res.status(200).json({
      success: true,
      message: "Successfully Fetched",
      data: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to login a user",
      err: error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteuser(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully deleted the user",
      data: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the user",
      err: error,
    });
  }
};

module.exports = {
  create,
  login,
  upadte,
  getAll,
  deleteUser,
  me,
};
