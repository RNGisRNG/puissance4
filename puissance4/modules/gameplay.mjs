import {end} from "./display.mjs";

export function gameplay(power4) {
    let scores = score(power4, 2); // possibilité de crée des session en fonction du nombre de joueurs

    let j = 0;
    for (let i = 0; i < 7; i++) { // possibilité de d'ajouter le nombre de column grâce à l'input de l'utilisateur
        play_token(power4, power4.grid.columns[i].tokens, power4.grid.rows[j].tokens, `.column-${i}`);
        if (j < 5)
            j++;
    }
}

function play_token(power4, classCol, classRow, colSelect) {
    const colTokens = classCol;
    const rowTokens = classRow;
    const column = document.querySelectorAll(colSelect);
    const tokensSelect = document.querySelectorAll(`${colSelect} p`);
    const playersTurn = document.querySelector("h2");
    const turn = document.querySelector("div p");

    for (let j = 0; j < column.length; j++) {
        column[j].addEventListener(("click"), () => {
            for (let i = column.length - 1; i >= 0; i--) {
                if (colTokens[i].used === 0) {
                    if (power4.who === 1) {
                        if (colTokens[0].used === 0) {
                            power4.changeTurn();
                            turn.innerHTML = `Turn ${power4.turn}`;
                            if (power4.turn === 42) // channger par cols * rows
                                end(2, power4.players[1].name, power4.players[0].score, power4.players[1].score);
                        }

                        colTokens[i].changeUsed();
                        colTokens[i].changeId(1);
                        power4.whoPlay(2);

                        tokensSelect[i].style.backgroundColor = power4.players[0].color;
                        playersTurn.textContent = `Player ${power4.players[1].name}`;

                        if (victoir_column(colTokens, power4.players[0].name) === 1) {
                            power4.players[0].wins();
                            end(1, power4.players[0].name, power4.players[0].score, power4.players[1].score);
                        }

                        break;
                    } else {
                        if (colTokens[0].used === 0) {
                            power4.changeTurn();
                            turn.innerHTML = `Turn ${power4.turn}`;
                            if (power4.turn === 42)
                                end(2, power4.players[1].name, power4.players[0].score, power4.players[1].score);
                        }

                        colTokens[i].changeUsed();
                        colTokens[i].changeId(2);
                        power4.whoPlay(1);

                        tokensSelect[i].style.backgroundColor = power4.players[1].color;
                        playersTurn.textContent = `Player ${power4.players[0].name}`;

                        if (victoir_column(colTokens, power4.players[1].name) === 1) {
                            power4.players[1].wins();
                            end(1, power4.players[1].name, power4.players[0].score, power4.players[1].score);
                        }

                        break;
                    }
                }
            }
        });
    }
}

function victoir_column(colTokens, player) {
    for (let i = colTokens.length - 1; i >= 0; i--) {
        if (colTokens[i].id === player && colTokens[i - 1].id === player && colTokens[i - 2].id === player && colTokens[i - 3].id === player) {
            return 1;
        }
    }
}

function score(power4, nbr){
    let scores = [];
    for(let i = 0; i < nbr; i++){
        sessionStorage.setItem(`player${i+1}`, `${power4.players[i].score}`);
        const score = sessionStorage.getItem(`player${i+1}`);
        scores.push(score);
    }
    return scores;
}