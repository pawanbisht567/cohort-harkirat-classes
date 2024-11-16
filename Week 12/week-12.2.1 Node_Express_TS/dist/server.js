"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res, next) => {
    return res.json({ msg: 'Hello world' });
});
app.listen(4000, () => {
    console.log('Make the express server run, at full speedss');
});
