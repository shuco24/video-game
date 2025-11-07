import type { Genre } from "../models";
import httpService from "./http-service";

const endpoint = "/genres";

export default new httpService<Genre>(endpoint);
