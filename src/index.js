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

  htmlString += `<li class="card">
  <h2 class="card--title">${pokeName}</h2>
  <img
    width="256"
    class="card--img"
    src="${pokeImg}"
  />
  <ul class="card--text">
    ${str}
  </ul>
`;

  str = "";
}

console.log(htmlString);
unorderedList.innerHTML = htmlString;
