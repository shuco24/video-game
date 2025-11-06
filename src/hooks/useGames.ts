import { useEffect, useState } from "react";
import type Game from "../models/Game";
import gamesService from "../services/games-service";
import { CanceledError } from "../services/api-client";

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = gamesService.getAll();

    request
      .then((res) => {
        setGames(res.data);

        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });

    return () => {
      cancel.abort();
    };
  }, []);

  return { games, setGames, error, setError, isLoading };
}

export default useGames;
