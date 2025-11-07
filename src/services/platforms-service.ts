import type { Platform } from "../models";
import HttpService from "./http-service";

const endpoint = "/platforms";

export default new HttpService<Platform>(endpoint);
