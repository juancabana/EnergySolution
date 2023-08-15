import joi from "joi";

const email = joi.string().email();
const password = joi.string().min(5);

export const authenticateSchema = joi.object({
  email: email.required(),
  password: password.required(),
});
