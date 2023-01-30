import Joi from "joi";

export const ticketSchema = Joi.object({
  ticketType: Joi.number().required()
});
