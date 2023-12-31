import { Model, DataTypes } from "sequelize";

export const USER_TABLE = "User";

export const UserSchema = {
  id: {
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
  monthlyReceipt: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  kWhConsumedMonth: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  desiredConsumption: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

export class User extends Model {
  // Relaciones
  static associate(models) {
    // User has many dayli consumption model
    // ForeignKey in Consumption
    this.hasMany(models.Consumption, {
      as: "Consumption",
      foreignKey: "UserId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}
