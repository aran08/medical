const { User } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");

const JWT_KEY = process.env.JWT_KEY;

class UserRepository {
  async CreateUser(data) {
    const user = await User.create(data);
    return user;
  }
  catch(error) {
    console.log("Something went wrong in the repository layer");
    throw { error };
  }

  async Login(data) {
    try {
      const { email, password } = data;
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        throw { message: "User not found" };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw { message: "Invalid password" };
      }

      const newJWT = this.createToken({
        email: user.email,
        id: user.id,
        role: user.role,
        is_profile_complete: user.is_profile_complete,
      });
      return newJWT;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAll() {
    try {
      const user = await User.findAll();
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async me(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in fetching user information");
      throw error;
    }
  }

  async update(data, id) {
    try {
      const response = await User.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong while updating user information");
      throw error;
    }
  }

  async deleteUser(userid) {
    try {
      const response = await User.destroy({
        where: {
          id: userid,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong while deleting user information");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      console.log("token inrepo", token);
      const response = jwt.verify(token, JWT_KEY);
      console.log("response for role verification", response);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation", error);
      throw error;
    }
  }
}

module.exports = UserRepository;
