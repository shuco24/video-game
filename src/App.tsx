import { useEffect, useState } from "react";
import gamesService from "./services/games-service";
import { CanceledError } from "axios";
import type Game from "./models/Game";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const { request, cancel } = gamesService.getAllGames();

    request
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err);
      });

    return () => {
      cancel.abort();
    };
  }, [games]);

  return (
    <div>
      <ul>
        {games.length > 0 &&
          games.map((g) => <li key={g.id.toString()}>{g.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
