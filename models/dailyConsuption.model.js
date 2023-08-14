import { Model, DataTypes } from 'sequelize';

export const DAILY_TABLE = 'DailyConsumption';


export const DailyConsumptionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  kWhConsumed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
};


export class DailyConsumption extends Model {
  // Relaciones
  static associate(models) {
   // DailyConsumption has belogs to one User
    // ForeignKey here
    this.belongsTo(models.User, {
      as: 'owner',
      foreignKey: 'UserId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DAILY_TABLE,
      modelName: 'DailyConsumption',
      timestamps: false,
    };
  }
}



