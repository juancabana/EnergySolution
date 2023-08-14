import joi from 'joi';

const id = joi.number().id();
const name = joi.string().alphanum().min(3).max(15);
const email = joi.string().email();
const password = joi.string().min(5);
const image = joi.string().allow(null).allow('');
const phone_number = joi.number().integer().positive();

export const createUserSchema = joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  image: image,
  phone_number: phone_number.required(),
});
export const updateUserSchema = joi.object({
  name: name,
  email: email,
  password: password,
  image: image,
  phone_number: phone_number,
});

export const getAndDeleteUserSchema = joi.object({ id: id.required() });
