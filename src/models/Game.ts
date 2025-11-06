import type Genre from "./Genre";
import type Platform from "./Platform";

export default interface Game {
  id: number;
  name: string;
  image: string;
  emoji: string;
  score: number;
  platforms: Platform[];
  genres: Genre[];
}
