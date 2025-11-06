import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {},
  params: { key: "31f716112a544adeb07cfa8f5d15c386" },
  transformResponse: (data: string) => {
    const parsed = JSON.parse(data);
    return parsed.results;
  },
});

export { CanceledError };
export default apiClient;
