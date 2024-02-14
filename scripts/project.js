const playersElement = document.querySelector("#players");
let playerList = [];

const displayPlayers = (players) => {
    console.log(players);
    for (const player of players) {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = `${player.name}, #${player.number}, ${player.position}`;
        const img = document.createElement("img");
        console.log(player.imageURL);
        img.src = player.imageURL;
        img.alt = player.name;
        /*img.width = "150";
        img.height = "150";*/
        article.appendChild(h3);
        article.appendChild(img);
        playersElement.appendChild(article);
    }
}

const getPlayers = async () => {
    const response = await fetch("https://run.mocky.io/v3/d0ef5056-2d96-41ec-b14a-53b067015fa5");
    console.log(`response ok:${response.ok}`)
    if (response.ok) {
        playerList = await response.json();
        displayPlayers(playerList);
        addFilterOptions(playerList);
    }
}

function reset() {
    playersElement.innerHTML = "";
}

function addFilterOptions(players) {
    console.log("got here 101");
    const filter = document.querySelector("#filtered");
    for (const player of players) {
        console.log(`adding filter: ${player.name}`)
        const option = document.createElement("option");
        option.value = player.name;
        option.textContent = player.name;
        filter.appendChild(option);
    }

    const option = document.createElement("option");
    option.value = "All";
    option.textContent = "All";
    filter.appendChild(option);
}

function filterPlayers(players) {
    reset();
    let filter = document.querySelector("#filtered");
    console.log(filter.value);

    let filtData = [];

    if (filter.value != "All") {
        for (const player of players) {
            if (filter.value === player.name) {
                filtData.push(player);
            }
        }
    }
    else {
        filtData = players;
    }

    displayPlayers(filtData);
}

getPlayers();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterPlayers(playerList)});