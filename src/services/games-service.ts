import type Game from "../models/Game";
import httpService from "./http-service";

interface RawGame extends Omit<Game, "image"> {
  background_image: string;
}

const endpoint = "/games";

const transformerReponse = (data: string): Game[] => {
  const parsed = JSON.parse(data);
  return parsed.results.map(({ background_image, ...game }: RawGame) => ({
    ...game,
    image: background_image,
  }));
};

export default new httpService<Game>(endpoint, transformerReponse);
