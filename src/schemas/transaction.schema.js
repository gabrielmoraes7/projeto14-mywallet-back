import Joi from "joi";

export const transactionSchema = Joi.object({
    value: Joi.number().positive().precision(2).required(),
    description: Joi.string().required(),
    type: Joi.string().required().valid("income", "expense")
});

export const editTransactionSchema = Joi.object({
    value: Joi.number().positive().precision(2).required(),
    description: Joi.string().required()
});