interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

// Singleton -> static variables and static method
export class GameManager {
    private games: Game[];

    private static instance: GameManager;   //make a private static instance
    private constructor() {         // private constructor
        this.games = [];
    }

    static getInstance() {
        if(!this.instance) {
            GameManager.instance = new GameManager();
        }
        console.log(this.instance === GameManager.instance) // True
        return this.instance;
    }

    addMove(gameId: string, move: string) {
        console.log('Adding move ' + move + ' to game ' + gameId);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId: string) {
        const game = {
            id: gameId,
            whitePlayerName: 'David',
            blackPlayerName: 'Tauras',
            moves: []
        }
        this.games.push(game);
    }

    log() {
        console.log(this.games)
    }
}

// export const gameManager = new GameManager();   // Cannot export like this

export const GameInstance = GameManager.getInstance();
// export const games: Game[] = [];