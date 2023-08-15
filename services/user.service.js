import sequelize from './../libs/sequelize.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';

class UserService {
  constructor() {}

  async find() {
    const users = await sequelize.models.User.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'image',
        'phone_number',
        'area',
        'floors',
        'rooms',
        'appliances',
      ]
    });
    return users;
  }
  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async findByEmail(email) {
    const user = await sequelize.models.User.findOne({
      where: { email: email },
    });
    return user;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await sequelize.models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async delete(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { message: 'EL usuario se ha eliminado correctamente' };
  }
}

export default UserService;
