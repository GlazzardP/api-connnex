"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTime = void 0;
const joi_1 = __importDefault(require("joi"));
const joiValidateOptions = {
    abortEarly: false,
};
const epochDescriptionScheme = joi_1.default.string()
    .valid("The current server time, in epoch seconds, at time of processing the request.")
    .required();
const epochObjSchema = joi_1.default.object({
    description: epochDescriptionScheme,
    type: joi_1.default.string().valid("number").required(),
});
const requiredSchema = joi_1.default.array()
    .items(joi_1.default.string().valid("epoch").required())
    .min(1)
    .max(1);
const typeScheme = joi_1.default.string().valid("object").required();
const timeSchema = joi_1.default.object({
    properties: {
        epoch: epochObjSchema,
    },
    required: requiredSchema,
    type: typeScheme,
});
// Reuseable Validate function when nmore validation needs to be added
const validate = (schema) => (payload) => schema.validate(payload, joiValidateOptions);
exports.validateTime = validate(timeSchema);
//# sourceMappingURL=validate.js.map