class Card
{
    constructor(colour, value)
    {
        this.colour = colour;
        this.value = value;
    }
}

class Deck {
    constructor(){
    
        // fills an array of size 12 with value of i + 1 for i
        this.values = Array.from({ length: 12}, (_, i) => i + 1);
        this.colours = ["red", "yellow", "blue", "green", "black"];
        this.cards = this.populateDeck();
    }


    populateDeck(){
        // .flatMap iterates on each colour then for each colour .map iterates on each number
        // .map would create 5 arrays containing 12 values; one for each color of that number
        // .flatMap ensures that the result is a single array of 60

        return this.colours.flatMap(colour => this.values.map(value => new Card(colour, value)));
    }

    shuffle(){

        // Implementing the fisher-yates shuffle
        // counting down from the last index and randomly swapping the values with randomly generated indices

        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal(players) {
        const numPlayers = players.length;

        if (numPlayers < 3 || numPlayers > 6) {
            throw new Error("Incorrect number of players. Game is played with 3 to 6 players");
        }

        this.shuffle();
        const handSize = Math.floor(60 / numPlayers);

        // removes the handSize amount of cards from the cards array and assigns it to each players from the first card; index 0.
        players.forEach(player => {
            player.hand = this.cards.splice(0, handSize);
        });
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    showHand() {
        // returns an array of card names in the format: red-12.
        return this.hand.map(card => `${card.colour} ${card.value}`);
    }
}

class Game {
    constructor(gameId, playerNames) {
        this.gameId = gameId;
        this.players = playerNames.map(name => new Player(name));
        this.deck = new Deck();
        this.deck.deal(this.players);
    }

    showAllHands() {
        // creates an array using the player names and hands; further joining them with a line break for readability
        return this.players.map( player => `${player.name}: ${player.showHand()}`).join("\n");
    }
}

class GameList {
    constructor() {
        this.games = [];
    }

    createGame(id, playerNames) {
        const game = new Game(id, playerNames);
        this.games.push(game);
        return game;
    }

    getGames() {
        return this.games;
    }
}

