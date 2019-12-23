"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
function isNumber(value) {
    return class_validator_1.IsInt(value);
}
exports.isNumber = isNumber;
//# sourceMappingURL=validator.js.map