import joi from 'joi';

const id = joi.number().id();
const date = joi.date();
const UserId = joi.number().integer().positive();
const kWhConsumed = joi.number().positive();

export const createConsumption = joi.object({
    date: date.required(),
    kWhConsumed: kWhConsumed.required(),
    UserId: UserId.required(),
});

export const getConsumption = joi.object({ id: id.required() });
