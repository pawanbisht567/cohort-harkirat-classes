"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInputSchema = void 0;
const zod_1 = require("zod");
exports.signupInputSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
console.log('Hi hello');
