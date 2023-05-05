const elSearchForm = document.querySelector(".search-pokemon-form");
const elSearchInput = elSearchForm.querySelector(".pokemon-search-input");
const elList = document.querySelector(".list");
const elNotFoundModal = document.querySelector(".not-found-modal-box");
const elNotFoundBtn = document.querySelector(".not-found-btn");
// Template
const elPokemonTemplate = document.querySelector(
	".show-pokemon-template",
).content;
// const pokeFragment1 = new DocumentFragment();
const pokeFragment2 = document.createDocumentFragment();
const searchPokemonArray = [];

function showPokemons(pokemonsArray) {
	elList.innerHTML = "";
	for (let pokemon of pokemonsArray) {
		const pokemonTemplateClone = elPokemonTemplate.cloneNode(true);
		pokemonTemplateClone.querySelector(".list-item__img").src = pokemon.img;
		pokemonTemplateClone.querySelector(".list-item__name").textContent =
			pokemon.name;
		pokemonTemplateClone.querySelector(".list-item__info").textContent =
			pokemon.type.join(", ");
		pokeFragment2.appendChild(pokemonTemplateClone);
	}

	elList.appendChild(pokeFragment2);
}
showPokemons(pokemons);

// Search pokemons
elSearchForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	const inputValue = elSearchInput.value;
	for (let pokemon of pokemons) {
		if (inputValue.toLowerCase() === pokemon.name.toLowerCase()) {
			searchPokemonArray.push(pokemon);
			elNotFoundModal.classList.remove("not-found-modal-box-active");
		}
		// if(inputValue.toLowerCase() !== pokemon.name.toLowerCase()) {
		//   elNotFoundModal.classList.add("not-found-modal-box-active")
		// }
	}

	showPokemons(searchPokemonArray);
});

elNotFoundBtn.addEventListener("click", () => {
	window.location.reload();
});
