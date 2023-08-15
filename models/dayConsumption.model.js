import { Model, DataTypes } from "sequelize";

export const DAY_TABLE = "DayConsumption";

export const DayConsumptionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    unique: true,
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

export class DayConsumption extends Model {
  // Relaciones
  static associate(models) {
    // DayConsumption has belogs to one User
    // ForeignKey here
    this.belongsTo(models.User, {
      as: "owner",
      foreignKey: "UserId",
    });
  }
  3;

  static config(sequelize) {
    return {
      sequelize,
      tableName: DAY_TABLE,
      modelName: "DayConsumption",
      timestamps: false,
    };
  }
}
