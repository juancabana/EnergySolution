import { UserSchema, User } from './user.model.js';
import { DailyConsumptionSchema, DailyConsumption } from './dailyConsuption.model.js';
// Se ejecutan todas las relaciones y se inicializa cada esquema
export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  DailyConsumption.init(DailyConsumptionSchema, DailyConsumption.config(sequelize));

  User.associate(sequelize.models);
  DailyConsumption.associate(sequelize.models);

}
