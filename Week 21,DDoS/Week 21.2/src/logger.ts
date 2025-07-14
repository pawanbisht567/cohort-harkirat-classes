// Logs the game state to server after every 5 seconds
// import { games } from "./store";

// export function startLogger(){
//     setInterval(() => {
//       console.log(games)
//     }, 5000);
// }


// Classes logic

import { GameInstance } from "./store";

export function startLogger(){

  setInterval(() => {
      GameInstance.log()
    }, 5000);
}