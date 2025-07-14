"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInstance = exports.GameManager = void 0;
// Singleton -> static variables and static method
class GameManager {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (!this.instance) {
            GameManager.instance = new GameManager();
        }
        console.log(this.instance === GameManager.instance);
        return this.instance;
    }
    addMove(gameId, move) {
        console.log('Adding move ' + move + ' to game ' + gameId);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'David',
            blackPlayerName: 'Tauras',
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
// export const gameManager = new GameManager();   // Cannot export like this
exports.GameInstance = GameManager.getInstance();
// export const games: Game[] = [];
