let pokeName;
let pokeImg;
let pokeStatName;
let pokStat;
let str = ``;
let strArray = [];
let htmlString = ``;
const unorderedList = document.querySelector("ul");
unorderedList.append(htmlString);

console.log(unorderedList);

for (let j = 0; j < data.length; j++) {
  pokeName = data[j].name;
  pokeImg = data[j].sprites.other.dream_world.front_default;

  for (let i = 0; i < data[j].stats.length; i++) {
    pokeStatName = data[j].stats[i].stat.name.toUpperCase();
    pokeStat = data[j].stats[i].base_stat;
    str += `<li>${pokeStatName}: ${pokeStat}<li/>`;
  }
  let newListItem = document.createElement("li");
  newListItem.setAttribute("class", "card");
  unorderedList.append(newListItem);
  let newHeading = document.createElement("h2");
  newHeading.setAttribute("class", "card--title");
  newHeading.innerHTML = pokeName;
  newListItem.append(newHeading);
  let newImg = document.createElement("img");
  newImg.setAttribute("width", "256");
  newImg.setAttribute("class", "card--img");
  newImg.setAttribute("src", `${pokeImg}`);
  newListItem.append(newImg);
  let newUnordered = document.createElement("ul");
  newUnordered.setAttribute("class", "card--text");
  newUnordered.innerHTML = `${str}`;
  newListItem.append(newUnordered);

  //   htmlString += `<li class="card">
  //   <h2 class="card--title">${pokeName}</h2>
  //   <img
  //     width="256"
  //     class="card--img"
  //     src="${pokeImg}"
  //   />
  //   <ul class="card--text">
  //     ${str}
  //   </ul>
  // `;

  str = "";
}

console.log(htmlString);
// unorderedList.innerHTML = htmlString;
