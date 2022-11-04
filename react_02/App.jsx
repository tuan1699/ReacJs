function App() {
  const currentUser = {
    name: "Tuan",
    isAdmin: true,
  };

  const names = ["Ba", "Tuấn", "Mai Anh", "Đức", "Trọng", "Sơn"];
  const listName = names.map((name) => <Hello name={name} />);
  return <div className="app">{listName}</div>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

const PokemonApp = () => {
  const pokemons = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];

  return (
    <div className="pokemon-app">
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

root.render(<PokemonApp />);
