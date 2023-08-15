import { UserSchema, User } from "./user.model.js";
import {
  HourConsumptionSchema,
  HourConsumption,
} from "./hourConsumption.model.js";
import {
  DayConsumptionSchema,
  DayConsumption,
} from "./dayConsumption.model.js";

// Se ejecutan todas las relaciones y se inicializa cada esquema
export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  HourConsumption.init(
    HourConsumptionSchema,
    HourConsumption.config(sequelize)
  );
  DayConsumption.init(DayConsumptionSchema, DayConsumption.config(sequelize));

  User.associate(sequelize.models);
  HourConsumption.associate(sequelize.models);
  DayConsumption.associate(sequelize.models);
}
