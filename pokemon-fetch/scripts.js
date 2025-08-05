function getPokemonName() {
  const pokemonName = document
    .getElementById("pokemon-name")
    .value.toLowerCase();

  return pokemonName;
}

async function fetchData() {
  try {
    const pokemonName = getPokemonName();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemon-sprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
