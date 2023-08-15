import { Model, DataTypes } from "sequelize";

export const HOUR_TABLE = "HourConsumption";

export const HourConsumptionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

export class HourConsumption extends Model {
  // Relaciones
  static associate(models) {
    // HourConsumption has belogs to one User
    // ForeignKey here
    this.belongsTo(models.User, {
      as: "owner",
      foreignKey: "UserId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HOUR_TABLE,
      modelName: "HourConsumption",
      timestamps: false,
    };
  }
}
