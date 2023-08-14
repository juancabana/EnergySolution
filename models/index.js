import { UserSchema, User } from './user.model.js';
// Se ejecutan todas las relaciones y se inicializa cada esquema
export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));

}
