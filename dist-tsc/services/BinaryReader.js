"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class BinaryReader {
    constructor(arrayBuffer) {
        this.position = 0;
        this.data = new Uint8Array(arrayBuffer);
    }
    seek(pos) {
        if (class_validator_1.IsNumber(pos)) {
            throw new Error(`position must be a number greater or equals to 0 and less than ${this.data.length}`);
        }
        const prevPos = this.position;
        this.position = pos;
        return prevPos;
    }
}
exports.BinaryReader = BinaryReader;
//# sourceMappingURL=BinaryReader.js.map