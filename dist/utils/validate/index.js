"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTime = void 0;
const schema_1 = require("./schema");
const joiValidateOptions = {
    abortEarly: false,
};
// Reuseable Validate function when nmore validation needs to be added
const validate = (schema) => (payload) => schema.validate(payload, joiValidateOptions);
exports.validateTime = validate(schema_1.timeSchema);
//# sourceMappingURL=index.js.map