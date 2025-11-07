import type { Platform } from "../models";
import type Game from "../models/Game";
import httpService from "./http-service";

const endpoint = "/games";

interface RawPlatform {
  platform: Platform & { image_background: string };
  requirements_en?: { minimum: string; recommended: string };
}

type RawGame = Omit<Game, "platforms"> & {
  metacritic: number;
  platforms?: RawPlatform[];
};

const transformerReponse = (data: unknown): Game[] => {
  if (!Array.isArray(data)) return [];
  try {
    return data.map((game: RawGame) => ({
      ...game,
      score: game.metacritic,
      platforms: game.platforms?.map((p) => ({
        ...p.platform,
        image: p.platform.image_background,
      })),
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default new httpService<Game>(endpoint, transformerReponse);
