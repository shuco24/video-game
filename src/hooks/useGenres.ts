import type { Genre } from "../models";
import { genresService } from "../services";
import useGeneric from "./useGeneric";

export default () => useGeneric<Genre>(() => genresService.getAll());
