import sequelize from '../libs/sequelize.js';

class UserService {
  constructor() {}

  async create(data) {
    const newConsuption = await sequelize.models.HourConsumption.create(data);
    return newConsuption;
  }

}

export default UserService;
