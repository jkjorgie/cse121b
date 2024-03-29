const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  const outputElement = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);

  const pokeListElem = document.querySelector("#outputList");
  let pokeListRslts = data.results;
  pokeListRslts = sortPokemon(pokeListRslts);
  pokeListRslts.forEach((curItem) => {
    const html = `<li>${curItem.name}</li>`;
    pokeListElem.innerHTML += html;
  })

}

async function getPokemonList(url2) {
  const response = await fetch(url2);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

function compare(a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

getPokemon(url);
getPokemonList(url2);
console.log("second: ", results);