import { timeSchema } from "./schema";

const joiValidateOptions = {
  abortEarly: false,
};

// Reuseable Validate function when nmore validation needs to be added
const validate = (schema) => (payload) =>
  schema.validate(payload, joiValidateOptions);

export const validateTime = validate(timeSchema);
