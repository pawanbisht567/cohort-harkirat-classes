"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utility_1 = require("./Utility");
function readUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = (0, Utility_1.getClient)();
        yield client.connect();
        const query = `
        SELECT * FROM USERS WHERE email = $1
    `;
        const username = 'pawan@example.com';
        const result = yield client.query(query, [username]);
        if (result.rows.length > 0) {
            console.log(result.rows);
        }
    });
}
readUsersTable();
