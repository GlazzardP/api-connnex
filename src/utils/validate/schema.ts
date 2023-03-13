import Joi from "joi";

const epochDescriptionScheme = Joi.string()
  .valid(
    "The current server time, in epoch seconds, at time of processing the request."
  )
  .required();

const epochObjSchema = Joi.object({
  description: epochDescriptionScheme,
  type: Joi.string().valid("number").required(),
});

const requiredSchema = Joi.array()
  .items(Joi.string().valid("epoch").required())
  .min(1)
  .max(1);
const typeScheme = Joi.string().valid("object").required();

const timeSchema = Joi.object({
  properties: {
    epoch: epochObjSchema,
  },
  required: requiredSchema,
  type: typeScheme,
});
export { timeSchema };
