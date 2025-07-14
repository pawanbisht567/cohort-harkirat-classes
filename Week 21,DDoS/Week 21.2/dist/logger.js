"use strict";
// Logs the game state to server after every 5 seconds
// import { games } from "./store";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
// export function startLogger(){
//     setInterval(() => {
//       console.log(games)
//     }, 5000);
// }
// Classes logic
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        store_1.GameInstance.log();
    }, 5000);
}
exports.startLogger = startLogger;
