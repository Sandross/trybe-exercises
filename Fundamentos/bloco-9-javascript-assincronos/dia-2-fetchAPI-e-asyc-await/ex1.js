const API_URL = 'https://api.coincap.io/v2/assets';

function append(data) {
  const ul = document.querySelector('ul');
  const ul = document.querySelector('ul');
  

  const li = document.createElement('li');
  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const divImage = document.createElement('div');
    function append(data) {
  ul.appendChild(li);
  ul.appendChild(li);
}
}

const fetchPokemon = async (cryptoName) => {
  try {
    const response = await fetch(
      `https://api.coincap.io/v2/assets${cryptoName}`
    );
    const object = await response.json();
    append({ name: object.name,  });
  } catch (error) {
    console.log('Deu ruim! Ao capturar ' + pokemonName);
  }
};

async function catchThemAll() {
  // await Promise.all([
  //   fetchPokemon('eevee'),
  //   fetchPokemon('kakuna'),
  //   fetchPokemon('charmander'),
  //   fetchPokemon('abra'),
  //   fetchPokemon('bulbasaur'),
  //   fetchPokemon('espeon'),
  // ]);
  const pokedex = [
    'eevee',
    'kakuna',
    'charmander',
    'abre',
    'bulbasaur',
    'espeon',
  ];


  for (const pokemon of pokedex) {
    await fetchPokemon(pokemon);
  }
}
}


window.onload = fetchPokemon;
window.onload = catchThemAll;