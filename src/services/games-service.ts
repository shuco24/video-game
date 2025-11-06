import type Game from "../models/Game";
import apiClient, { CanceledError } from "./api-client";

interface RawGame extends Omit<Game, "image"> {
  background_image: string;
}

class GamesService {
  getAllGames() {
    const controller = new AbortController();
    const request = apiClient.get<Game[]>("/games", {
      signal: controller.signal,
      transformResponse: (data) => {
        const parsed = JSON.parse(data);
        return parsed.results.map((g: RawGame) => ({
          ...g,
          image: g.background_image,
        }));
      },
    });

    return { request, cancel: controller } as const;
  }
}

export default new GamesService();
