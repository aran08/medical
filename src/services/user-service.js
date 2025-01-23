const UserRepository = require("../repository/user");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async CreateUser(data) {
    try {
      console.log("datainside service", data)
      const user = await this.userRepository.CreateUser(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async LoginUser(data) {
    try {
      const user = await this.userRepository.Login(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async me(token) {
    try {
      const user = await this.userRepository.me(token);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async update(data, id) {
    try {
      const user = await this.userRepository.update(data,id);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async deleteuser(userid) {
    try {
      const user = await this.userRepository.deleteUser(userid);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
  
}

module.exports = UserService;
