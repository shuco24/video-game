import useGames from "./hooks/useGames";

function App() {
  const { games, error, isLoading } = useGames();

  return (
    <div>
      {error && <p className="text-danger">error</p>}
      {isLoading && <div className="spinner-border"></div>}

      <ul>
        {games.length > 0 &&
          games.map((g) => <li key={g.id.toString()}>{g.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
