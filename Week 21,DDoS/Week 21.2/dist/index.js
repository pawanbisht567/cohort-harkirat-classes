"use strict";
// We are simulating the chess game.
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
// import { games } from "./store"
// const gameManager = new GameManager();   // this will create a separate instance of the GameManager() each and every time
// setInterval(()=> {
//     games.push({
//         id: Math.random().toString(),
//         whitePlayerName: 'Pawan',
//         blackPlayerName: 'Tarun',
//         moves: []
//     })
// }, 5000)
setInterval(() => {
    store_1.GameInstance.addGame(Math.random().toString());
}, 5000);
(0, logger_1.startLogger)();
