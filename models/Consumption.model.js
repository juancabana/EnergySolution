import { Model, DataTypes } from "sequelize";

export const CONSUMPTION_TABLE = "Consumption";

export const ConsumptionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  kWhConsumed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

export class Consumption extends Model {
  // Relaciones
  static associate(models) {
    // Consumption has belogs to one User
    // ForeignKey here
    this.belongsTo(models.User, {
      as: "owner",
      foreignKey: "UserId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSUMPTION_TABLE,
      modelName: "Consumption",
      timestamps: false,
    };
  }
}
