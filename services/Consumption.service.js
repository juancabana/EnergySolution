import sequelize from "../libs/sequelize.js";

class UserService {
  constructor() {}

  async create(data) {
    const newConsumption = await sequelize.models.Consumption.create(data);
    return newConsumption;
  }
}

export default UserService;
