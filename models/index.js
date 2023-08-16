import { UserSchema, User } from "./user.model.js";
import {
  ConsumptionSchema,
  Consumption,
} from "./Consumption.model.js";


// Se ejecutan todas las relaciones y se inicializa cada esquema
export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Consumption.init(
    ConsumptionSchema,
    Consumption.config(sequelize)
  );

  User.associate(sequelize.models);
  Consumption.associate(sequelize.models);
}
