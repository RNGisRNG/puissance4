export function display() {
    document.querySelector("head").innerHTML = `<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity=sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' crossorigin='anonymous'>`

    document.querySelector("body").innerHTML = `
        <main>
            <div class='container header'>
                <h1>Puissance 4</h1>
                <div>
                    <h2>Player 1</h2>
                    <p>Turn 0</p>
                </div>
            </div>
           <table>
            </table>
        </main>`;

    display_table();
}

function display_table() { // possibilité d'ajouter le nombre de row et de colonnes à afficher, suite à l'input de l'utilisateur
    for (let i = 0; i < 6; i++) {
        document.querySelector("table").innerHTML += `<tr class="trays"></tr>`;
    }

    const trNodes = document.querySelectorAll("tr");
    let j = 0;

    for (let tr of trNodes) {
        for (let i = 0; i < 7; i++) {
            tr.innerHTML += `<td class='column-${i}'><p></p></td>`;
            j++;
        }
    }
}

export function end(wins, player, scoreOne, scoreTwo){
    document.querySelector("main").innerHTML = `
    <div>
        <h1 class="win-text"></h1>
        <div class="scores">
            <h2>Scores :</h2>
            <p>Player 1 : ${scoreOne}</p>
            <p>Player 2 : ${scoreTwo}</p>
        </div>
        <button class="btn-replay" type="button">Replay</button>
    </div>`;

    if(wins === 1)
        document.querySelector("h1").innerText = `Player ${player} wins !`;
    else
        document.querySelector("h1").innerText = `Draw`;
}