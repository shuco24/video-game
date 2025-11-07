import axios, { CanceledError, type AxiosResponse } from "axios";
const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {},
  params: { key: "31f716112a544adeb07cfa8f5d15c386" },
  transformResponse: [
    (data: string) => {
      try {
        const parsed = JSON.parse(data);
        //CORREGIR
        parsed.results = parsed.results.map((item: any) => ({
          ...item,
          image: item.image_background ?? item.background_image ?? item.image,
        }));
        return parsed.results;
      } catch (err) {
        throw Error(
          `[requestClient] Error parsing response JSON data - ${JSON.stringify(
            err
          )}`
        );
      }
    },
  ],
});

export { CanceledError, type AxiosResponse as Response };
export default apiClient;
