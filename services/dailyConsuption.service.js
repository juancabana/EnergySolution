import sequelize from './../libs/sequelize.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {}

  async create(data) {
    const newConsuption = await sequelize.models.DailyConsumption.create(data);
    return newConsuption;
  }

}

export default UserService;
