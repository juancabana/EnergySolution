import joi from "joi";

const id = joi.number().id();
const name = joi.string().min(3).max(99);
const email = joi.string().email();
const password = joi.string().min(5);
const image = joi.string().allow(null).allow("");
const phone_number = joi.number().integer().positive();
const area = joi.number().positive();
const floors = joi.number().integer().positive();
const rooms = joi.number().integer().positive();
const appliances = joi.number().integer().positive();
const monthlyReceipt = joi.number().positive();
const kWhConsumedMonth = joi.number().positive();
const desiredConsumption = joi.number().positive();

export const createUserSchema = joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  image: image,
  phone_number: phone_number.required(),
  area: area.required(),
  floors: floors.required(),
  rooms: rooms.required(),
  appliances: appliances.required(),
});
export const updateUserSchema = joi.object({
  name: name,
  image: image,
  phone_number: phone_number,
  area: area.required(),
  floors: floors.required(),
  rooms: rooms.required(),
  appliances: appliances.required(),
});
export const userUpdatePreferences = joi.object({
  monthlyReceipt: monthlyReceipt.required(),
  kWhConsumedMonth: kWhConsumedMonth.required(),
  desiredConsumption: desiredConsumption.required(),
});

export const getAndDeleteUserSchema = joi.object({ id: id.required() });
