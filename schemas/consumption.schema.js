import joi from "joi";

const id = joi.number().id();
const type = joi.string().alphanum();
const date = joi.date();
const kWhConsumed = joi.number().positive();

export const createConsumption = joi.object({
  date: date.required(),
  type: type.required(),
  kWhConsumed: kWhConsumed.required(),
});

export const getConsumption = joi.object({ id: id.required() });
