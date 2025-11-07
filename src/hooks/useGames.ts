import type Game from "../models/Game";
import { gamesService } from "../services";
import useGeneric from "./useGeneric";

export default () => useGeneric<Game>(() => gamesService.getAll());
