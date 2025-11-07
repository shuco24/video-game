import type { Platform } from "../models";
import { platformsService } from "../services";
import useGeneric from "./useGeneric";

export default () => useGeneric<Platform>(() => platformsService.getAll());
