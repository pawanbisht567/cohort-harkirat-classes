"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const pg_1 = require("pg");
function getClient() {
    return new pg_1.Client({
        connectionString: 'postgresql://postgres:Samsung$1234@localhost/TestFridayDB'
    });
}
exports.getClient = getClient;
