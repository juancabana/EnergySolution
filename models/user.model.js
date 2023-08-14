import { Model, DataTypes } from 'sequelize';

export const USER_TABLE = 'User';

export const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  recovery_token: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  phone_number: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  area: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  floors: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  rooms: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  appliances: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

};

export class User extends Model {
  // Relaciones

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}
