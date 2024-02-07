/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    console.log(temples);
    for (const temple of temples) {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    }
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        //let filteredData = templeList.filter(obj => obj.location.includes("Utah"));
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.querySelector("#filtered");
    console.log(filter.value);

    let filtData = [];

    //console.log(filter);

    switch (filter.value) {
        case "utah":
            filtData = temples.filter(obj => obj.location.includes('Utah'));
            break;
        case "notutah":
            filtData = temples.filter(obj => !obj.location.includes("Utah"))
            break;
        case "older":
            filtData = temples.filter(obj => obj.dedicated.substring(0,4) < "1950");
            break;
        case "all":
            filtData = temples;
            break;
      }

    displayTemples(filtData);
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});