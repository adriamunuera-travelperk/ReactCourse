const pokemons = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

function getPokemonURLImage(id) {
  return BASE_URL + formatID(id) + EXTENSION
}

function formatID(id) {
  const strID = id.toString()
  const desiredLength = 3
  const diffWithDesiredLength = desiredLength - strID.length
  return '0'.repeat(diffWithDesiredLength) + strID
}

const BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const EXTENSION = '.png'

const getRandomPokemon = () => pokemons[Math.floor(Math.random() * pokemons.length)]

function getRandomTeam() {
  let team = [getRandomPokemon(), getRandomPokemon(), getRandomPokemon(), getRandomPokemon()]
  return team
}

function getTotalExperienceOfTeam(team) {
  let exp = 0
  for (let i = 0; i < team.length; i++) {
    exp = exp + team[i].base_experience
  }
  return exp
}

const randomString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export {getRandomTeam, getPokemonURLImage, getTotalExperienceOfTeam, randomString}
