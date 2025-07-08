import db from "./models/index.js"
// const User = require("./models").User;
const { User } = db;


export default {
  async getAllUsers(){
    return await User.findAll();
  },
  async createUser(userData){
    return await User.create(userData);
  }
}
