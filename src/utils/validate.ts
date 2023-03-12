import Joi from "joi";

const joiValidateOptions = {
  abortEarly: false,
};

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
  type: Joi.any(),
});

// Reuseable Validate function when nmore validation needs to be added
const validate = (schema) => (payload) =>
  schema.validate(payload, joiValidateOptions);

export const validateTime = validate(timeSchema);
