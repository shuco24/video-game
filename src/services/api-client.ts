import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {},
  params: { key: "31f716112a544adeb07cfa8f5d15c386" },
});

export { CanceledError };
export default apiClient;
