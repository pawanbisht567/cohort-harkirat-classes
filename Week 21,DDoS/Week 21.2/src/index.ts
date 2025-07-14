// We are simulating the chess game.

import { startLogger } from "./logger"
import { GameInstance } from "./store";
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
setInterval(()=> {
    GameInstance.addGame(Math.random().toString())
}, 5000)
startLogger();


