export class Power4 {
    #grid;
    #players;
    #who;
    #turn;

    constructor(grid, players) {
        this.#grid = grid;
        this.#players = players;
        this.#who = 1;
        this.#turn = 0;
    }

    get grid() {
        return this.#grid;
    }

    get players() {
        return this.#players;
    }

    get who() {
        return this.#who;
    }

    get turn(){
       return this.#turn;
    }

    whoPlay(player) {
        this.#who = player;
    }

    changeTurn(){
        this.#turn++;
    }
}

class Grid {
    #columns
    #rows

    constructor(columns, rows) {
        this.#columns = columns;
        this.#rows = rows;
    }

    get columns() {
        return this.#columns;
    }

    get rows() {
        return this.#rows;
    }
}

class Columns {
    #tokens;

    constructor(tokens) {
        this.#tokens = tokens;
    }

    get tokens() {
        return this.#tokens;
    }
}

class Rows {
    #tokens;

    constructor(tokens) {
        this.#tokens = tokens;
    }

    get tokens() {
        return this.#tokens;
    }
}

class Tokens {
    #id;
    #color;
    #used;

    constructor(id, color) {
        this.#id = id;
        this.#color = color;
        this.#used = 0;
    }

    get id() {
        return this.#id;
    }

    get used() {
        return this.#used;
    }

    changeId(player){
        this.#id = player;
    }

    changeUsed(){
        this.#used = 1;
    }
}

class Players {
    #name;
    #color;

    #score;

    constructor(name, color) {
        this.#name = name;
        this.#color = color;
        this.#score = 0;
    }

    get name() {
        return this.#name;
    }

    get color() {
        return this.#color;
    }

    get score(){
        return this.#score;
    }

    wins(){
        this.#score++;
    }
}

export function newGrid() {
    return new Grid(newColumns(), newRows());
}

function newColumns() { // possiblité de d'ajouter un paramètre qui défini le nobre de colonnes suite à un input pour l'option des joueurs
    let columns = [];
    for (let i = 0; i < 7; i++) {
        const column = new Columns(newTokens(6));
        columns.push(column);
    }
    return columns;
}

function newRows() { // possibilité d'ajouter un parramètre pour le nombre de rows
    let rows = [];
    for (let i = 0; i < 6; i++) {
        const row = new Rows(newTokens(7));
        rows.push(row);
    }
    return rows;
}

function newTokens(length) { // possibilité de rajouter un paramètre pour le nombre de tokens dans l'array (row ou column)
    let tokens = [];
    for (let i = 0; i < length; i++) {
        const token = new Tokens(0, "white");
        tokens.push(token);
    }
    return tokens;
}

export function newPlayers() { // possibilité de changer la couleur à la demande de l'utilisateur (input)
    let players = [];
    const playerOne = new Players(1, "red");
    const playerTwo = new Players(2, "yellow");
    players.push(playerOne, playerTwo);
    return players;
}