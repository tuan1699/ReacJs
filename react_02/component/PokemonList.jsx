const PokemonList = ({ pokemons }) => {
  const list = pokemons.map((pokemon) => {
    return <Pokemon pokemon={pokemon} />;
  });

  return <div className="pokemon-list">{list}</div>;
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PokemonType),
};
